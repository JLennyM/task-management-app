import React from "react";

const HeadingComp =({first, second}) =>{
return(
    <div>
        <h1 className="text-center sign-up-heading">
           {first} Sign <br />{second}

        </h1>
    </div>
    );
};

export default HeadingComp;