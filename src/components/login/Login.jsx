import React from "react";
import Background from '../../assets/bg.jpg'
import { Link } from "react-router-dom";
// import "./signup.css";

const Login = () => {
    return(
        <section className="login-form">
            <div className="bg_cover bg-center h-screen" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h2 className="text-stone-50 text-2xl pt-6 pl-12 font-semibold">EduLink</h2>

                <div className="form pt-64 pl-52">

                    <h1 className="text-6xl font-semibold text-stone-50 ">Welcome back<span className="text-7xl text-[#1D90F5]">.</span></h1>

                    <p class="text-s text-stone-50 pt-5">Don't have an account ? <span className="text-[#1D90F5] underline underline-offset-2"> <Link to="/signup">Register now</Link> </span></p>

                    <form action="/submit"  method="POST">

                        <div class="form-group pt-10 pb-2 ">
                            <input className="w-[29.5rem] h-14 p-3  bg-[#2c2c2c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D90F5]" type="email" name="email" placeholder="Email" required></input>
                        </div>

                        <div class="form-group pt-1 pb-2">
                            <input className=" shadow-input w-[29.5rem] h-14 p-3 bg-[#2c2c2c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D90F5]" type="password" name="password" placeholder="Password" required></input>
                        </div>

                        <div className="flex space-x-4 pt-6">

                            <button className="bg-[#1D90F5] text-neutral-50 w-[14rem] px-4 py-2 rounded-full hover:bg-blue-600 transition" type="submit">Log In</button>
                           
                            <button className="bg-gray-500 text-neutral-50 w-[14.5rem] h-12 px-4 py-2 rounded-full hover:bg-gray-600 transition" >Forgot Password</button>

                        </div>
                    </form>


                </div>
            </div>
            
        </section>
    );
}

export default Login;