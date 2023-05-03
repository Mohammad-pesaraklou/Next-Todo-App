import TodoUser from "@/models/User";
import { connectDB } from "@/utils/ConnectDB";
import { VerifyPassword } from "@/utils/auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error in connecting to db");
        }

        if (!email || !password) {
          throw new Error("Invalid Data!");
        }

        const user = await TodoUser.findOne({ email: email });

        if (!user) throw new Error("User dose'nt Exist!");
        const isValid = await VerifyPassword(password, user.password);
        console.log(isValid);

        if (!isValid) throw new Error("email or password is incorrect!");

        return { email };
      },
    }),
  ],
});
