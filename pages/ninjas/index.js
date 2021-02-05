import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

const Ninjas = ({ ninjas }) => {
  return (  
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keyword" content="ninjas" />
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { ninjas: data }
  }
}
 
export default Ninjas;