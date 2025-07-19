import { useState } from "react";

export default function ReviewFeedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedFeedback = JSON.parse(localStorage.getItem("userFeedback")) || [];
    storedFeedback.push({ feedback, date: new Date().toISOString() });
    localStorage.setItem("userFeedback", JSON.stringify(storedFeedback));

    setSubmitted(true);
    setFeedback("");
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };
  
  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#0088ff] to-[#7f00ff] text-white rounded-full p-5 shadow-lg hover:scale-105 hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#4d9eff] transition transform"
        >
          💌
        </button>
      )}
      {isOpen && (
        <div className="bg-[#0a0f1a] rounded-2xl shadow-2xl p-5 w-72 border border-gray-700 relative text-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="font-bold header text-white">Share your thoughts</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white hover:cursor-pointer text-xl"
            >
              ✕
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback..."
                className="w-full  mt-3 p-3 rounded-lg border extra border-gray-600 focus:outline-none focus:border-[#4d9eff] focus:ring-2 focus:ring-[#3bc9ff] text-sm resize-none h-28 bg-[#111827] text-gray-100 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r header from-[#0088ff] to-[#7f00ff] text-white rounded-lg mt-3 p-2 w-full font-bold hover:scale-105 hover:cursor-pointer transition transform text-sm"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="mt-3 text-[#37ff9f] text-sm font-semibold extra text-center animate-bounce">
              Thank you for your feedback! 🎉
            </div>
          )}
        </div>
      )}
    </div>
  );
}
