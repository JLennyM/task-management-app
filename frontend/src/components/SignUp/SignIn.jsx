import React from "react";
import "./SignIn.css"; // Can be renamed to SignIn.css if needed
import HeadingComp from "./HeadingComp";

const SignIn = () => {
    return (
        <div className="signin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column w-100 p-5">
                            <input 
                                className="p-2 my-3 input-sign-in"
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                            />
                            <input 
                                className="p-2 my-2"
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                            />
                            <button className="btn-signin p-2">Sign In</button>
                        </div>
                    </div>
                    <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
                        <HeadingComp first="Sign" second="In" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
