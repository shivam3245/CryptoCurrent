import React, { useState } from "react";

const AuthPage = ({ onClose, onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Simulate login and pass the username to the parent component
            onLogin(username || "User");
        } else {
            // Simulate sign up
            onLogin(username);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white border-2 border-black p-8 rounded-lg max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block mb-1 text-black" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full border rounded p-2 text-black"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block mb-1 text-black" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded p-2 text-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-black" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded p-2 text-black"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-lg">
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>
                <p className="text-sm text-center mt-4 text-black">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={toggleAuthMode}
                        className="text-blue-500 font-bold underline ml-2"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-600 font-bold bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default AuthPage;