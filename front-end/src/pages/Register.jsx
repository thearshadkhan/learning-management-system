import React, { useState } from "react";

function Register({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md z-50">
    <div className="bg-white bg-opacity-90 w-full max-w-md p-6 rounded-lg shadow-lg transform transition-all scale-100">
      
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Register</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
          &times;
        </button>
      </div>

      {/* Form Fields */}
      <form>
        <div className="mb-3">
          <label className="block text-sm font-medium">Full Name</label>
          <input type="text" className="w-full p-2 border rounded-md focus:outline-blue-500" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full p-2 border rounded-md focus:outline-blue-500" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="w-full p-2 border rounded-md focus:outline-blue-500" placeholder="Enter password" />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Confirm Password</label>
          <input type="password" className="w-full p-2 border rounded-md focus:outline-blue-500" placeholder="Confirm password" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Register
        </button>
      </form>

      {/* Footer */}
      <p className="text-sm text-center mt-3">
        Already have an account? <span className="text-blue-600 cursor-pointer">Login</span>
      </p>
    </div>
  </div>
  );
}

export default Register;
