import styles from './footer.module.css'

interface IFooterProps {
  modes: 'Mode1' | 'Mode2'
}

export const Footer = ({ modes }: IFooterProps) => {
  return (
    <footer className={styles.footer}>
      {modes === 'Mode1' && <p style={{ color: "black" }} >Footer</p>}

      {modes === 'Mode2' && <p style={{ color: "red" }}>Footer</p>}
    </footer>
  )
}