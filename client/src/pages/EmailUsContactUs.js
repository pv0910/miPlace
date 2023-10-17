import React , { useState } from 'react'
import image from '../images/contactus.webp';

function EmailUsContactUs() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  return (
    <div className="bg-white p-4 pl-20 rounded-lg shadow-md flex font-mullish justify-between space-between items-center gap-6  mx-auto ">
    <img
      src={image}
      alt="Book Hotels fast and easy with Hotels"
      className="w-1/2 "
    />
    <div className="flex-1 flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <h2 className="text-l">We’ll soon try to contact you.</h2>
      <h3>Name</h3>
      <input
        type="text"
        placeholder="Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-1/2"
      />
      <h3>Email</h3>
      <input
        type="email"
        placeholder="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-1/2"
      />
      <h3>Write your message here</h3>
      <input
        type="text"
        placeholder="Type here"
        value={Message}
        onChange={(e) => setMessage(e.target.value)}
        className=" border border-gray-300 rounded-md w-1/2 h-32"
      />
      
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-1/3">
        Send
      </button>
    </div>
    </div>
  )
}

export default EmailUsContactUs