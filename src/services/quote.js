const ADVICE_ENDPOINT_RANDOM_QUOTE = 'https://api.adviceslip.com/advice'

export const getRandomQuote = async () => {
  try {
    const res = await fetch(ADVICE_ENDPOINT_RANDOM_QUOTE)
    if(!res.ok) throw new Error('Error fetching quote')
    const data = await res.json()
    return data.slip
  } catch (e) {
    throw new Error('Error searching quote')
  }
}


// export const getRandomQuote = () => {
//   return fetch(ADVICE_ENDPOINT_RANDOM_QUOTE)
//     .then(res => res.json())
//     .then(data => data.slip)
// }