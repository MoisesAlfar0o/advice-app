import './App.css'
import { Advice } from './components/Advice/Advice.jsx'
import { useRandomQuote } from './hooks/useRandomQuote.js'
 
export const App = () => {
  const { quote,  refreshRandomQuote } = useRandomQuote()
  return (
    <div className='container'> 
      {
        quote && 
          <main className='advice-container'>
            <Advice advice={quote} newQuote={refreshRandomQuote}/> 
          </main>
      }
    </div>
  )
}
   