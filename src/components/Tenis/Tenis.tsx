import styles from './Tenis.module.css'

type tenisProps = {
  image?: string
}

const Tenis = ({image}: tenisProps) => {
  return (
    <div className={styles.tenis}>
      <img src={image} alt="tenis" />
    </div>
  )
}

export default Tenis