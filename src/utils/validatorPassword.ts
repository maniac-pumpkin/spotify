const specialCharReg = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
const upperCaseReg = /[A-Z]/;

const validatePassword = (password: string) => {
  const includesSpecialChar = specialCharReg.test(password);
  const includesUpperCaseLet = upperCaseReg.test(password);
  const isMoreThanEightChar = password.length >= 8;
  return includesSpecialChar && includesUpperCaseLet && isMoreThanEightChar;
};

export default validatePassword;
