const regex = /^[a-z0-9]*$/;

const validateUsername = (username: string) => {
  const isEnglishChar = regex.test(username);
  const isMoreThanFourChar = username.length >= 4;
  return isEnglishChar && isMoreThanFourChar;
};

export default validateUsername;
