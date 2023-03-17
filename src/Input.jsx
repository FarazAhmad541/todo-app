export default function Input(props) {
  // Destructure props
  const { inputText, setInputText, autoFocus, handleText, id } = props;

  // Function to handle changes in the input field
  function handleChange(event) {
    setInputText(event.target.value);
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Check if inputText is not empty or whitespace
    if (inputText) {
      // Call the handleText function with the trimmed inputText as argument
      handleText(inputText.trim());
    }
  }

  // Destructure the placeholder prop
  const { placeholder } = props;

  // Render the component with a form and input field
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit} id={props.id}>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
      </form>
    </div>
  );
}
