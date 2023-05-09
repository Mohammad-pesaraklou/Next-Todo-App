import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
// style
import styles from "../../styles/Navbar.module.scss";
import SideBar from "./SideBar";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Navbar = () => {
  return (
    <AppBar sx={{ pb: "50px" }} className={styles.container}>
      <Toolbar>
        <div>
          <Typography variant="h4">Todo App</Typography>
        </div>
        <div className={styles.stack}>
          <div>
            <Link href={""}>
              <p>Todo's</p>
            </Link>
            <Link href={"/addTodo"}>
              <p>Add Todo</p>
            </Link>
            <Link href={""}>
              <p>Profile</p>
            </Link>
          </div>
        </div>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <Link href={"/signup"}>SIGN Up</Link>
        <Link href={"/signin"}>SIGN In</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
