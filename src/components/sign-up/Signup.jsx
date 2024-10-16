import React from "react";
import Background from '../../assets/bg.jpg'
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <section className="signup-form">

            {/* Background image */}
            <div className="bg_cover bg-center h-screen" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h2 className="text-stone-50 text-2xl pt-6 pl-12 font-semibold">EduLink</h2>

                <div className="form pt-64 pl-52">

                    <h1 className="text-6xl font-semibold text-stone-50 ">Create new account<span className="text-7xl text-[#1D90F5]">.</span></h1>

                    <p class="text-s text-stone-50 pt-5">Already A Member? <span className="text-[#1D90F5] underline underline-offset-2"> <Link to="/login">Log In</Link> </span></p>

                    <form action="/submit"  method="POST">
                        <div className="flex pt-10 pb-2">

                            <div class="form-group mr-3 ">
                                <input className="w-[14.35rem] h-14 p-3 bg-[#2c2c2c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D90F5]" type="text" name="first_name" placeholder="First name" required></input>
                            </div>
                            
                            <div class="form-group">
                                <input className="w-[14.35rem] h-14 p-3 bg-[#2c2c2c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D90F5]" type="text" name="last_name" placeholder="Last name" required></input>
                            </div>
                        </div>

                        <div class="form-group pt-1 pb-2 ">
                            <input className="w-[29.5rem] h-14 p-3  bg-[#2c2c2c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D90F5]" type="email" name="email" placeholder="Email" required></input>
                        </div>

                        <div class="form-group pt-1 pb-2">
                            <input className=" shadow-input w-[29.5rem] h-14 p-3 bg-[#2c2c2c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D90F5]" type="password" name="password" placeholder="Password" required></input>
                        </div>

                        <div className="flex space-x-4 pt-6">

                            <button className="bg-[#1D90F5] text-neutral-50 w-[14rem] px-4 py-2 rounded-full hover:bg-blue-600 transition" type="submit">Create Account</button>
                           
                            <button className="bg-gray-500 text-neutral-50 w-[14.5rem] h-12 px-4 py-2 rounded-full hover:bg-gray-600 transition" >Sign In</button>

                        </div>
                    </form>


                </div>

            </div>

        </section>
    );
}

export default Signup;