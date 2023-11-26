import Tenis from '../Tenis/Tenis'
import styles from './Body.module.css'


const Body = () => {
  return (
    <div className={styles.body}>
      <h3>Destaques</h3>
      <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
      <div>
        <Tenis image='/images/air-jordan-2.svg'/>
        <Tenis image='/images/air-jordan-3.svg'/>
        <Tenis image='/images/air-jordan-4.svg'/>
        <Tenis image='/images/air-jordan-5.svg'/>
        <Tenis image='/images/air-jordan-9.svg'/>
        <Tenis image='/images/air-jordan-5.svg'/>
        <Tenis image='/images/air-jordan-2.svg'/>
        <Tenis image='/images/air-jordan-7.svg'/>
      </div>
    </div>
  )
}

export default Body