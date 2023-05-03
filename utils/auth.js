import { compare, hash } from "bcryptjs";

async function VerifyPassword(password, hashedPass) {
  const isValid = await compare(password, hashedPass);
  return isValid;
}
async function hashingPassword(password) {
  const result = await hash(password, 12);
  return result;
}

export { VerifyPassword, hashingPassword };
