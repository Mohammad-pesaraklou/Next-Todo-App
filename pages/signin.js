import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
// style
import styles from "../styles/Form.module.scss";
import Link from "next/link";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const { status } = useSession();

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, []);

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    const req = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (req.error) {
      setError(req.error);
      setInterval(() => {
        setError("");
      }, 5000);
    }
    if (!req.error) router.replace("/");
    console.log(req);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={sendData}>
        <h1>Sign In Here</h1>
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
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p>
            You don't have sign up already?
            <Link href={"signup"}>click here.</Link>
          </p>
        )}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignIn;
