import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
    } catch (error) {
      return res
        .status(422)
        .json({ status: "failed", message: "failed to connect to db!" });
    }

    const { title, description } = req.body;

    const todoUser = await TodoUser.find();
    await todoUser.map((i) => {
      i.Done.push({ title, description });
    });
    await todoUser.save();
    console.log(todoUser);
    res.status(201).json({ mes: "suc", data: todoUser });
  }
}

export default handler;
