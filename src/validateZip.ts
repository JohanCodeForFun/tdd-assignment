export const isValidZip = (input: string) => {
  const testIfZipIdValid = input;

  if (!parseInt(testIfZipIdValid)) {
    return false
  }

  if (testIfZipIdValid.length !== 5) {
    return false
  }
  
  return true;
};