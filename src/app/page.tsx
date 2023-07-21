
import Link from 'next/link'
import { Suspense } from 'react'
import GetIp from './getip';

export default function Home() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  // const data = await response.json()

  const ip = GetIp()

  return (
    <main>
      <Link href="./dashboard">Dashboard</Link>{" "}
      <Link href="./about">About</Link>{" "}
      <Link href="./products/1">Produto ID 1</Link>{" "}
      {/* <Suspense fallback={<p>Loading</p>}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Suspense> */}
      <h2>{ip}</h2>
    </main>
  )
}