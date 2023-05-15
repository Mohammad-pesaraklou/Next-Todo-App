// style
import styles from "../../styles/Form.module.scss";

const ProfileForm = ({ changeHandler, updateHandler, form }) => {
  return (
    <div className={styles.container}>
      <form onSubmit={updateHandler}>
        <h1>Complete Your Information</h1>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
          placeholder="Please Enter Your Name"
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={changeHandler}
          placeholder="Please Enter Your lastName"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfileForm;
