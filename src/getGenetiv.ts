export const getGenitive = (name: string) => {
  const testInputForLastChar = name;

if (testInputForLastChar.endsWith('s')) {
  return name
}
  return name + "s";
}