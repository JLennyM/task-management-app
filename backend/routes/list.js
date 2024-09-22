const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");  // corrected List model

// Create Task
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save();

      // Push the newly created list into user's list array and save user
      existingUser.list.push(list);  // Assuming `list` is an array in User schema
      await existingUser.save();

      return res.status(200).json({ list });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Update Task
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      // Update the task and return the updated document
      const list = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true });
      
      if (list) {
        return res.status(200).json({ message: 'Task Updated', list });
      } else {
        return res.status(404).json({ message: 'Task not found' });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Delete Task
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate({ email },{$pull: { list:req.params.id}});
    
    if (existingUser) {
      // Delete the task by its ID
      await List.findByIdAndDelete(req.params.id) ;

      return res.status(200).json({ message: 'Task Deleted' });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});

//getTask
router.get("/getTasks/:id", async (req, res) => {
   const list = await List.find({ user: req.params.id }).sort({createdAt:-1 });
    if(list.length !==0){
      res.status(200).json({ list: list });
    }else{
      res.status(200).json({ message:"No task" });
    }
   });
  
module.exports = router;
