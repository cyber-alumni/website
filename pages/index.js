import styles from  "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.container__navbar}>
                placeholder
            </div>


            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
        </div>
    )
}
