export const isValidEmail = (input: string) => {
  const testIfEmailIdValid = input;
  const testRegex = /\w+@\w+\.\w+/gi;

  return testRegex.test(testIfEmailIdValid);
};