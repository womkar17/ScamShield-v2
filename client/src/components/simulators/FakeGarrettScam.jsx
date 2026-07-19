import React, { useState } from 'react';

export default function FakeGarrettScam({ onComplete }) {
  // State to manage the current view: 'portal', 'register', or 'success'
  const [view, setView] = useState("portal");
  
  // State to capture user input (simulating data collection)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Simulate a network request or processing delay
    setTimeout(() => {
      setView("success");
      // Trigger the onComplete callback with the collected data
      if (onComplete) {
        onComplete(formData);
      }
    }, 800);
  };

  // 1. REGISTER VIEW
  if (view === "register") {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Fast-Track Registration</h2>
        <p className="text-sm text-gray-600 mb-4">Enter your details to instantly connect with our hiring managers.</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            Submit Application
          </button>
          <button 
            type="button"
            onClick={() => setView("portal")}
            className="w-full text-gray-500 text-sm hover:text-gray-700 mt-2"
          >
            ← Back to jobs
          </button>
        </form>
      </div>
    );
  }

  // 2. SUCCESS VIEW
  if (view === "success") {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200 text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Application Received!</h2>
        <p className="text-gray-600 mb-6">
          Thank you, <span className="font-semibold">{formData.name}</span>. 
          A "recruiter" will contact you shortly via email or text message.
        </p>
        <button 
          onClick={() => setView("portal")}
          className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition"
        >
          Return to Home
        </button>
      </div>
    );
  }

  // 3. DEFAULT: JOB PORTAL VIEW
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Premium Remote Job Portal</h1>
        <p className="text-gray-600">Exclusive, high-paying opportunities with minimal requirements.</p>
      </header>
      
      <div className="space-y-4">
        {/* Fake Job Listing 1 */}
        <div className="border p-4 rounded-lg hover:shadow-md transition bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-blue-700">Data Entry Specialist (Remote)</h3>
              <p className="text-sm text-gray-600">$45/hr • No experience required • Immediate start</p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Urgent</span>
          </div>
          <button 
            onClick={() => setView("register")}
            className="mt-3 bg-blue-600 text-white py-1.5 px-4 rounded text-sm hover:bg-blue-700 transition"
          >
            Apply Now
          </button>
        </div>
        
        {/* Fake Job Listing 2 */}
        <div className="border p-4 rounded-lg hover:shadow-md transition bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-blue-700">Virtual Assistant</h3>
              <p className="text-sm text-gray-600">$35/hr • Flexible hours • Equipment stipend included</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">New</span>
          </div>
          <button 
            onClick={() => setView("register")}
            className="mt-3 bg-blue-600 text-white py-1.5 px-4 rounded text-sm hover:bg-blue-700 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}