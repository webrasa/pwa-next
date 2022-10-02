import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleSubmit = () => {
    alert('Submited!');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PWA-Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.description}>
          Welcome to PWA QR-Generator!
        </h3>

        <form onSubmit={handleSubmit}>
        <label>
            Uplatilac:
            <input type='text' name='payer'></input>
          </label>
          <label>
            Svrha uplate:
            <input type='text' name='purpose'></input>
          </label>
          <label>
            Primalac:
            <input type='text' name='acceptant'></input>
          </label>
          <label>
            Iznos:
            <input type='text' name='amount'></input>
          </label>
          <label>
            Sifra placanja:
            <input type='text' name='payment-code'></input>
          </label>
          <label>
            Valuta:
            <input type='text' name='currency'></input>
          </label>
          <label>
            Racun primaoca:
            <input type='text' name='account'></input>
          </label>
          <label>
            Poziv na broj:
            <input type='text' name='approval-number'></input>
          </label>
          <input type="submit" value='Generisi QR'/>
        </form>

        <div className={styles.grid}>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a>

        </a>
      </footer>
    </div>
  )
}
