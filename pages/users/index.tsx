import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import styles from './Users.module.css'

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersProps {
  dataUsers: User[]
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props
  const router = useRouter()

  console.log(dataUsers)
  return (
    <Layout pageTitle="Users Page">
      <p>User Page</p>
      {dataUsers.map((user: User) => {
        return (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className={styles.card}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await res.json()
  return {
    props: {
      dataUsers,
    },
  }
}
