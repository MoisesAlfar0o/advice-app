import './App.css'
import { Advice } from './components/Advice/Advice.jsx'
import { useRandomQuote } from './hooks/useRandomQuote.js'
 
export const App = () => {
  const { quote,  refreshRandomQuote, loading } = useRandomQuote()
  return (
    <div className='container'> 
      {
        quote && 
          <main className='advice-container'>
            {
              quote && 
                <Advice advice={quote} newQuote={refreshRandomQuote} loading={loading}/> 
            }
          </main>
      }
    </div>
  )
}
   