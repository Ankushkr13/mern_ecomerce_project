import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const setRounds = 10;
    const hashedPassword = await bcrypt.hash(password, setRounds); // plane password or hashpassword
    return hashedPassword;
  } catch (error) {
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
