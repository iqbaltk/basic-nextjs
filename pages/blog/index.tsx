import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styles from './Blog.module.css'

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

interface BlogProps {
  dataBlog: Post[]
}

export default function blog(props: BlogProps) {
  const { dataBlog } = props
  const router = useRouter()

  console.log(dataBlog)
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog: Post) => (
        <div
          key={blog.id}
          className={styles.card}
          onClick={() => router.push(`/blog/${blog.id}`)}
        >
          <p>ID : {blog.id}</p>
          <p>ID User : {blog.userId}</p>
          <p>Judul : {blog.title}</p>
          <p>Berita : {blog.body}</p>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataBlog = await res.json()
  return {
    props: {
      dataBlog,
    },
  }
}
