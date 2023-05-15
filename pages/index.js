import { getSession } from "next-auth/react";
// component
import TodoPage from "@/components/modules/TodoPage";

export default function Home() {
  return <TodoPage />;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
