import { useRef, useState } from "react";

function HomePage() {
  const [feedback, setFeedback] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(e) {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {}); // { email: 'test@test.com', text: 'Some feedback text' }
  }

  function handleFeedbackHandler() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input ref={emailInputRef} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea ref={feedbackInputRef} id="feedback" rows="5" />
        </div>
        <button>Send feedback</button>
      </form>
      <hr />
      <button onClick={handleFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedback.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
