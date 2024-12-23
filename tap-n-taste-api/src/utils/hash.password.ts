import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const passwords = await bcrypt.hash(password,10);
  return passwords;
};