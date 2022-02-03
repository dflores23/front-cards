// Import useState hook
import React, { useState } from "react";

const Form = ({ initialTodo, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////

  const [formData, setFormData] = useState(initialTodo);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmission = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };


  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form onSubmit={handleSubmission}>
      <input class="text-center"
        placeholder="Question"
        type="text"
        onChange={handleChange}
        value={formData.question}
        name="question"
      />
      <input class="text-center"
        placeholder="Answer"
        type="text"
        onChange={handleChange}
        value={formData.answer}
        name="answer"
      />
      <input class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center" type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;