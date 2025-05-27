// import './Advice.css'
import mobileDivider from '../../assets/images/pattern-divider-mobile.svg'
import desktopDivider from '../../assets/images/pattern-divider-desktop.svg'
import iconRandom from '../../assets/images/icon-dice.svg'

export const Advice = ({ advice, newQuote }) => {
  if (!advice) return 
  return (
    <>
      <h1>Advice #{advice.id}</h1>
      <q>{advice.advice}</q>
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileDivider} />
        <source media="(min-width: 769px)" srcSet={desktopDivider} />
        <img src={desktopDivider} alt="Divider" />
      </picture>
      <button onClick={newQuote}>
          <img src={iconRandom} alt='Icon new random quote' />
      </button>
    </>
  )
}