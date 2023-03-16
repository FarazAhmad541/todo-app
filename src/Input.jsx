export default function Input(props) {
  const { inputText, setInputText, autoFocus, handleText } = props;

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputText) {
      handleText(inputText.trim());
    }
  }

  const { placeholder } = props;

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
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
