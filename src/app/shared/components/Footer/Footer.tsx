import styles from './footer.module.css'

interface IFooterProps {
  modes: 'Mode1' | 'Mode2'
}

export function Footer({ modes }: IFooterProps) {
  return (
    <b className={styles.header}>
      {modes === 'Mode1' && <p style={{ color: "black" }} >Footer</p>}

      {modes === 'Mode2' && <p style={{ color: "red" }}>Footer</p>}
    </b>
  )
}