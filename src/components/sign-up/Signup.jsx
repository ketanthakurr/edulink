import React from "react";

const Signup = () => {
    return (
        <section className="flex justify-center items-center min-h-screen bg-cover bg-center" 
                 style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('your-image-url.jpg')"}}>
            <div className="bg-gray-900 bg-opacity-90 p-10 rounded-lg shadow-lg text-white max-w-md w-full">
                <h1 className="text-2xl font-light mb-4 text-center">
                    Create new account<span className="text-blue-500">.</span>
                </h1>

                <p className="text-sm text-gray-400 text-center mb-6">
                    Already A Member? <a href="login.html" className="text-blue-500 hover:underline">Log In</a>
                </p>

                <form action="/submit" method="POST" className="space-y-4">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="first_name" 
                            placeholder="First name" 
                            required 
                            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            name="last_name" 
                            placeholder="Last name" 
                            required 
                            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            required 
                            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            required 
                            className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded mt-4">
                        Create Account
                    </button>
                </form>

                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded mt-4">
                    Forgot Password
                </button>
            </div>
        </section>
    );
}

export default Signup;
