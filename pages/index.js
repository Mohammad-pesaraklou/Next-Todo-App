import TodoPage from "@/components/modules/TodoPage";

export default function Home() {
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
