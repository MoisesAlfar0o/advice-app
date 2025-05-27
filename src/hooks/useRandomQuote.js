import { useEffect, useState } from "react"
import { getRandomQuote } from "../services/quote.js"

export const useRandomQuote = () => {
  const [quote, setQuote] = useState()
  const [error, setError] = useState(null)

  const refreshRandomQuote = async () => {
    try {
      setError(null)
      const data = await getRandomQuote()
      setQuote(data)
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    refreshRandomQuote()
  }, [])

  return { quote, refreshRandomQuote, error }
}