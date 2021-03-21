export const getAllQuotes =  async () => {
    const response = await fetch('https://seinfeld-quotes.herokuapp.com/quotes')
    return response.json()
}