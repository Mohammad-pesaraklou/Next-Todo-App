import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
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
    if (!req.error) router.replace("/");
  };

  return (
    <div>
      <h1>Please Sign in</h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "50px",
        }}
        onSubmit={sendData}
      >
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignIn;
