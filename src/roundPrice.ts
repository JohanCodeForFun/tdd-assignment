export const roundPrice = (price: number, currencyFormat: string = "SEK") => {

  const roundedPrice = price.toFixed(2)

  switch (currencyFormat) {
    case 'SEK':
      return `${roundedPrice} SEK`
    case '%PRICE% kr':
      return `${roundedPrice} kr`
    case '$%PRICE%':
      return "$" + roundedPrice
    case 'USD %PRICE%':
      return `USD ${roundedPrice} SEK`

    default:
      throw new Error("Missing currency format for price")
  };
};