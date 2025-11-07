//Thank you for submitting Exam.


import React from "react";
import truerizeLogo from "../../assets/images/Truerize_Logo.png";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg text-center p-12">
        <img
          src={truerizeLogo}
          alt="Truerize Logo"
          className="h-32 w-32 mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You for submitting your Exam!
        </h2>
        <p className="text-gray-500">
          You may now close the window now.
        </p>
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import truerizeLogo from "../../assets/images/Truerize_Logo.png";

// const StarIcon = ({ fill }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill={fill ? "#F59E42" : "none"}
//     stroke="#F59E42"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="w-10 h-10"
//   >
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//   </svg>
// );

// export default function FeedbackPage() {
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [comments, setComments] = useState("");
//   const [showThankYou, setShowThankYou] = useState(false);

//   const stars = [1, 2, 3, 4, 5];
//   const minLength = 4;
//   const maxLength = 1000;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (comments.length < minLength) {
//       alert("Please enter at least 4 characters.");
//       return;
//     }
//     if (rating === 0) {
//       alert("Please rate your experience.");
//       return;
//     }
//     setShowThankYou(true);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[#24324d]">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-xl text-center p-8">
//         <img src={truerizeLogo} alt="Truerize Logo" className="h-36 w-36 mx-auto mb-6" />
//         <h2 className="text-2xl font-bold text-gray-900 mb-1">Great, your Test has been completed!</h2>
//         <p className="text-gray-500 mb-8">Your responses have been submitted</p>
//         <form onSubmit={handleSubmit} className="text-left w-full">
//           <div className="mb-8 text-center">
//             <div className="font-medium text-lg text-[#192132] mb-2">How was your test taking experience?</div>
//             <div className="flex justify-center space-x-2 mb-2">
//               {stars.map((star) => (
//                 <div
//                   key={star}
//                   onClick={() => setRating(star)}
//                   onMouseEnter={() => setHoverRating(star)}
//                   onMouseLeave={() => setHoverRating(0)}
//                   className="cursor-pointer"
//                 >
//                   <StarIcon fill={star <= (hoverRating || rating)} />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mb-6">
//             <div className="font-medium text-lg text-[#192132] mb-2">
//               Anything else you would like to tell us?
//             </div>
//             <textarea
//               value={comments}
//               maxLength={maxLength}
//               minLength={minLength}
//               onChange={(e) => setComments(e.target.value)}
//               placeholder="Please write your feedback here..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow text-base"
//               rows="4"
//               required
//             />
//             <div className="flex justify-between text-xs text-gray-400 mt-1">
//               <span>
//                 * Minimum 4 characters are required to post a feedback
//               </span>
//               <span>
//                 {comments.length} / {maxLength}
//               </span>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#1875e7] text-white text-lg px-8 py-2 rounded-lg shadow hover:bg-[#146acf] transition-colors font-semibold"
//             >
//               Share your Feedback!
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* Thank you modal */}
//       {showThankYou && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
//           <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 w-full max-w-xs text-center border-t-4 border-green-500 animate-fadeIn">
//             <svg className="w-14 h-14 text-green-500 mx-auto mb-2 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none"
//               viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="#f1fdf7"/>
//               <polyline points="16 8 11 14 8 11" stroke="#22c55e" strokeWidth="2" fill="none"/>
//             </svg>
//             <h2 className="text-xl font-bold text-gray-800 mb-2">Thank you for your feedback!</h2>
//             <p className="text-gray-600 mb-1">You may now close the window.</p>
//           </div>
//         </div>
//       )}
//       <style>
//         {`
//           .animate-bounce { animation: bounce 1s; }
//           @keyframes bounce {
//             0% { transform: translateY(-10px); }
//             50% { transform: translateY(5px);}
//             80% { transform: translateY(-3px);}
//             100% { transform: translateY(0);}
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.5s ease;
//           }
//           @keyframes fadeIn {
//             0% { opacity: 0; transform: scale(0.97);}
//             100% { opacity: 1; transform: scale(1);}
//           }
//         `}
//       </style>
//     </div>
//   );
// }
