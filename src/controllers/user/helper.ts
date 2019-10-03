const bcrypt = require("bcrypt");

export async function generateHashPassword(password: string) {
  const saltRounds = 10;
  try {
    // const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    throw err;
  }
}

export async function verifyHashPassword(
  password: string,
  hashPassword: string
) {
  return bcrypt.compare(password, hashPassword);
}
