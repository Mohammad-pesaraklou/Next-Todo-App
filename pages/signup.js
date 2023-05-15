import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// style
import styles from "../styles/Form.module.scss";
import Link from "next/link";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();
  const { status } = useSession();

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(status);

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, []);

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    const req = await axios.post("api/auth/signup", {
      email,
      password,
    });

    if (req.data) router.replace("/signin");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={sendData}>
        <h1>Sign Up Here</h1>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={changeHandler}
          placeholder="Please Enter Your Email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={changeHandler}
          placeholder="Please Enter Your Password"
        />
        <p>
          You don't have sign up already?
          <Link href={"signin"}>click here.</Link>
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
