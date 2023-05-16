import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
// icon
import { CiEdit } from "react-icons/ci";
import { RiTodoLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";

// style
import styles from "../../styles/TodoCard.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tasks = ({ data, title, next, back, fetcher }) => {
  const router = useRouter();

  const updateHandler = async (id, status) => {
    const req = await axios.patch("api/todo/updateTodo", {
      id,
      status,
    });
    console.log(req.data);
    fetcher();
  };
  const deleteHandler = async (id) => {
    const req = await axios.delete(`/api/todo/${id}`);
    console.log(req);
    if (req.status === 200) {
      toast.success("Your Todo Added successfully!");
      router.reload();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles[title]}>
        <h1>{title}</h1>
      </div>
      <div className={styles.cardParent}>
        {data?.map((i) => (
          <div key={i.title} className={styles.cardContainer}>
            <div className={styles.iconContainer}>
              <RiTodoLine />
              <div>
                <Link href={`todo/${i._id}`}>
                  <CiEdit className={styles.edit} />
                </Link>
                <BsTrash
                  onClick={() => deleteHandler(i._id)}
                  className={styles.trash}
                />
              </div>
            </div>
            <div style={{ padding: "10px 0px" }}>
              <span>{i.title}</span>
            </div>
            <div className={styles.btnContainer}>
              {back && (
                <button
                  className={styles.backBtn}
                  name="back"
                  onClick={(e) => updateHandler(i._id, back)}
                >
                  Back
                </button>
              )}
              {next && (
                <button
                  className={styles.nextBtn}
                  name="next"
                  onClick={(e) => updateHandler(i._id, next)}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
