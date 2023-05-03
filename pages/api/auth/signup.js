import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { hashingPassword } from "@/utils/auth";

async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    await connectDB();
  } catch (error) {
    return res
      .status(422)
      .json({ status: "failed", message: "failed to connect to db!" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ status: "failed", message: "Invalid Data!" });
  }

  const isExistingUser = await TodoUser.findOne({ email: email });

  if (isExistingUser) {
    return res
      .status(422)
      .json({ status: "failed", message: "User is already Exist!" });
  }

  const hashedPassword = await hashingPassword(password);

  const USER = await TodoUser.create({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ status: "success", data: USER });
}
export default handler;
