import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
// styles
import styles from "../../styles/SideBar.module.scss";
// icons
import { AiOutlineLogin } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";

const Header = () => {
  const { status } = useSession();
  const logOutHandler = () => {
    signOut();
  };
  return (
    <header>
      <h1>Todo App</h1>
      {status === "unauthenticated" ? (
        <div className={styles.btnContainer}>
          <div className={styles.btnChild}>
            <VscSignIn fontSize={"25px"} />
            <Link href={"/signup"}>Sign Up</Link>
          </div>
          <div className={styles.btnChild}>
            <AiOutlineLogin fontSize={"25px"} />
            <Link href={"/signin"}>Sign In</Link>
          </div>
        </div>
      ) : (
        <div className={styles.btnContainer}>
          <div>
            <VscSignIn fontSize={"25px"} />
            <p onClick={logOutHandler}>Log Out</p>
          </div>
        </div>
      )}
      <div className={styles.stack}>
        <div>
          <Link href={"/"}>
            <p>Todo's</p>
          </Link>
          <Link href={"/addTodo"}>
            <p>Add Todo</p>
          </Link>
          <Link href={"/profile"}>
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
