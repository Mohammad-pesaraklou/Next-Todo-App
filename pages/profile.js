import { getSession, useSession } from "next-auth/react";
import TodoUser from "@/models/User";
import { useState } from "react";
import axios from "axios";
// component
import ProfileForm from "@/components/modules/ProfileForm";
import { useRouter } from "next/router";
import ProfilePage from "@/components/modules/ProfilePage";

const Profile = ({ todoUser }) => {
  const [form, setForm] = useState({ name: "", lastName: "" });
  const { status } = useSession();
  const router = useRouter();

  const updateHandler = async () => {
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

  if (status === "unauthenticated") router.replace("/signin");

  if (!todoUser?.name)
    return (
      <ProfileForm
        changeHandler={changeHandler}
        updateHandler={updateHandler}
        form={form}
      />
    );

  return <ProfilePage todoUser={todoUser} />;
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
