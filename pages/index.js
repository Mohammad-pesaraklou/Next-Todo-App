import TodoPage from "@/components/modules/TodoPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "unauthenticated") router.replace("/signup");
  return (
    <div>
      <TodoPage />
    </div>
  );
}
