export const validateSafaricomNumber = (number: string) => {
  const safaricomRegex = /^(?:\+?254|0)?(7[0-9]|11[0-5])[0-9]{6}$/;
  return safaricomRegex.test(number);
};
