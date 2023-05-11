import ProfileForm from "@/components/modules/ProfileForm";
import TodoUser from "@/models/User";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useState } from "react";

const Profile = ({ todoUser }) => {
  const [form, setForm] = useState({ name: "", lastName: "" });
  const [userData, setUserData] = useState({});
  const updateHandler = async (e) => {
    // e.preventDefault();
    const req = await axios.post("api/todo/updateTodo", {
      name: form.name,
      lastName: form.lastName,
    });
  };

  console.log(todoUser);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  if (!todoUser?.name)
    return (
      <ProfileForm
        changeHandler={changeHandler}
        updateHandler={updateHandler}
        form={form}
      />
    );

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>Name:</p>
        <span>{todoUser?.name}</span>
      </div>
      <div>
        <p>LastName:</p>
        <span>{todoUser?.lastName}</span>
      </div>
      <div>
        <p>Email:</p>
        <span>{todoUser?.email}</span>
      </div>
    </div>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log(session);
  const todoUser = await TodoUser.findOne({ email: session?.user?.email });
  console.log(todoUser);
  return {
    props: {
      todoUser: JSON.parse(JSON.stringify(todoUser)),
    },
  };
}
