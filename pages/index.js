import TodoPage from "@/components/modules/TodoPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "unauthenticated") return router.replace("/signin");
  return (
    <div>
      <TodoPage />
    </div>
  );
}

// export async function getStaticProps(context) {

//   const data = await Todo

//   return {
//     props: { session },
//   };
// }
