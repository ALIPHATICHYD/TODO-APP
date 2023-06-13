import { useState } from "react";

// TaskForm component
export default function TaskForm({ onAdd }) {
  // State for task name
  const [taskName, setTaskName] = useState('');

  // Function to handle form submission
  function handleSubmit(ev) {
    ev.preventDefault();
    // Call onAdd function with taskName as argument
    onAdd(taskName);
    // Reset taskName state to an empty string
    setTaskName('');
  }

  // Rendered JSX
  return (
    <form onSubmit={handleSubmit}>
      {/* Button to submit the form */}
      <button>+</button>
      {/* Input field to enter task name */}
      <input
        type="text"
        value={taskName}
        onChange={ev => setTaskName(ev.target.value)}
        placeholder="Your next task..."
      />
    </form>
  );
}
