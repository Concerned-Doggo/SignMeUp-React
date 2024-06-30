import { useState } from "react";
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({});

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "SignMeUp Feedback";
    const body = `Email: ${feedback.email}\nFeedback: ${feedback.feedback}`;
    const mailtoLink = `mailto:support@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <form id="feedbackForm">
      <div className="flex flex-col">
        <div className="ml-3 my-10 flex flex-col">
          <label htmlFor="email"> Email:</label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            className="w-[40ch] border-2 border-solid border-black rounded-lg"
            placeholder="example@mail.com"
          />
        </div>
        <div className="ml-3 mb-3 flex flex-col">
          <label htmlFor="feedback" className="">
            Feedback:
          </label>
          <input
            onChange={handleChange}
            id="feedback"
            className="w-[40ch] h-[100px] border-2 border-solid border-black rounded-lg"
            type="text"
          />
        </div>
        <button
          onSubmit={handleSubmit}
          className="bg-sky-400 p-2 rounded-3xl ml-3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
