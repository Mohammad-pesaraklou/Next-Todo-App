import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method === "PATCH") {
    try {
      await connectDB();
    } catch (error) {
      return res
        .status(422)
        .json({ status: "failed", message: "failed to connect to db!" });
    }

    const { id, status } = req.body;

    if (!id || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid Data!" });
    }

    const user = await TodoUser.updateOne(
      { "todos._id": id },
      { $set: { "todos.$.status": status } }
    );

    res.status(200).json({ mes: "success" });
  } else if (req.method === "POST") {
    try {
      await connectDB();
    } catch (error) {
      return res
        .status(422)
        .json({ status: "failed", message: "failed to connect to db!" });
    }

    const { name, lastName } = req.body;

    if (!name || !lastName) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid Data!" });
    }

    const session = await getSession({ req });

    const user = await TodoUser.findOne({ email: session?.user?.email });
    if (!user) {
      return res
        .status(422)
        .json({ status: "failed", message: "User Dose'nt Exist! " });
    }

    user.name = name;
    user.lastName = lastName;
    user.save();
    console.log(user);
    res.status(201).json({ message: "successful", data: user });
  }
}

export default handler;
