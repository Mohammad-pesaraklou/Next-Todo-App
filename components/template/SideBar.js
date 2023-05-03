import { Typography } from "@mui/material";
import styles from "../../styles/SideBar.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";

const SideBar = () => {
  const session = useSession();
  const { status } = session;
  console.log({ session, status });
  return (
    <div>
      <div className={styles.container}>
        <Typography variant="h5" sx={{ color: "black" }}>
          Welcome👋
        </Typography>
        {status === "authenticated" && (
          <ul>
            <Link href={""}>
              <li>Todo's</li>
            </Link>
            <Link href={"/addTodo"}>
              <li>Add Todo</li>
            </Link>
            <Link href={""}>
              <li>Profile</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
