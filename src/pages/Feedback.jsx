import React from "react";
import FeedbackForm from "../components/FeedbackForm";

const Feedback = () => {
  return (
    <div>
      <div className="md:px-32 md:py-2 p-10">
        <h1 className="text-sky-400 font-bold text-3xl mb-5">FEEDBACK US!</h1>
        <p className="text-gray-600 font-semibold">
          We value your input! Your feedback helps us improve our website and
          better serve your needs. Please take a moment to share your thoughts,
          suggestions, or any issues you encountered. We appreciate your time
          and commitment to helping us enhance your experience.
        </p>
      </div>

      <div className="flex md:px-32 p-10 flex-col md:flex-row">
        <img
          className="w-40 md:w-96 md:mr-20 self-center md:self-start mb-10"
          src="https://images-ext-1.discordapp.net/external/FeJ2voBV6mrnDlkgEYMcs9B9RDwkz_0-4l2kaa67nSg/https/raw.githubusercontent.com/Concerned-Doggo/SignMeUp/main/public/images/feedback/feedback.png?format=webp&quality=lossless&width=700&height=700"
          alt="Feedback img"
        />

                <FeedbackForm />
      </div>
    </div>
  );
};

export default Feedback;
