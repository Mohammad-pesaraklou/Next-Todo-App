import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
    <div>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
