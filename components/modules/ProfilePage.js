import { CgProfile } from "react-icons/cg";
// style
import styles from "../../styles/Profile.module.scss";

const ProfilePage = ({ todoUser }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <CgProfile fontSize={"25px"} />
        <h2>Profile</h2>
      </div>
      <div className={styles.info}>
        <p>Name:</p>
        <span>{todoUser?.name}</span>
      </div>
      <div className={styles.info}>
        <p>LastName:</p>
        <span>{todoUser?.lastName}</span>
      </div>
      <div className={styles.info}>
        <p>Email:</p>
        <span>{todoUser?.email}</span>
      </div>
    </div>
  );
};

export default ProfilePage;
