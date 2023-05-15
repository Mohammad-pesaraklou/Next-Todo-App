import styles from "../../styles/AddForm.module.scss";

const RadioButton = ({
  status,
  setStatus,
  value,
  children,
  title,
  backColor,
}) => {
  return (
    <div className={styles[backColor]}>
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
