import { Context } from 'vm';
import Layout from '../../components/Layout'

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostDetailProps {
  post: Post
}

export default function BlogDetail(props: PostDetailProps) {
  const { post } = props
  return (
    <Layout pageTitle="Blog Detail">
      <p>ID Pembuat : {post.userId}</p>
      <h1>Title : {post.title}</h1>
      <p>Berita : {post.body}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataBlog = await res.json()
  const paths = dataBlog.map((post: Post) => ({
    params: {
      id: `${post.id}`,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

interface getStaticProps{
  params: {
    id: string
  }
}

export async function getStaticProps(context: getStaticProps) {
  const {id} = context.params

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const post = await res.json()
  
  return {
    props: {
      post,
    },
  }
}
