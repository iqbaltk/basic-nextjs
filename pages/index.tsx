import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/img/fotoprofil.jpg" width={200} height={200} alt="poto1" />
      <h1 className={styles['title-homepage']}>Iqbal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
        maiores voluptatibus tempore voluptas adipisci, officiis iste temporibus
        quaerat quas iure delectus error dolores maxime omnis nemo. Inventore, a
        ullam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
        maiores voluptatibus tempore voluptas adipisci, officiis iste temporibus
        quaerat quas iure delectus error dolores maxime omnis nemo. Inventore, a
        ullam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
        maiores voluptatibus tempore voluptas adipisci, officiis iste temporibus
        quaerat quas iure delectus error dolores maxime omnis nemo. Inventore, a
        ullam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
        maiores voluptatibus tempore voluptas adipisci, officiis iste temporibus
        quaerat quas iure delectus error dolores maxime omnis nemo. Inventore, a
        ullam?
      </p>
      <Image
        src="/img/foto_ijazah_baru.jpg"
        width={200}
        height={200}
        alt="poto2"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
        maiores voluptatibus tempore voluptas adipisci, officiis iste temporibus
        quaerat quas iure delectus error dolores maxime omnis nemo. Inventore, a
        ullam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
        maiores voluptatibus tempore voluptas adipisci, officiis iste temporibus
        quaerat quas iure delectus error dolores maxime omnis nemo. Inventore, a
        ullam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
        maiores voluptatibus tempore voluptas adipisci, officiis iste temporibus
        quaerat quas iure delectus error dolores maxime omnis nemo. Inventore, a
        ullam?
      </p>
      <Image src="/img/ctf_tiktok.jpg" width={200} height={200} alt="poto3" />
    </Layout>
  )
}
