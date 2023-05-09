const RadioButton = ({ status, setStatus, value, title, children }) => {
  return (
    <div>
      <label>
        {children}
        {title}
      </label>
      <input
        onChange={(e) => setStatus(e.target.value)}
        type="radio"
        value={value}
        id={value}
        checked={status === value}
      />
    </div>
  );
};

export default RadioButton;
