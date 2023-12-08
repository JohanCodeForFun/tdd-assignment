export const makeHeading = (text: string, headerSize: number) => {

  if (headerSize > 6) {
    throw new Error('Headings size is to big! Only heading sizes 1-6 are valid.');
  }

  return `<h${headerSize}>${text}</h${headerSize}>`;
};