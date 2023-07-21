
import Link from 'next/link'
// import { Suspense } from 'react'
const os = require('os');
const networkInfo = os.networkInterfaces();

export default function Home() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  // const data = await response.json()

  // const ip = GetIp()

  const address = networkInfo?.Ethernet?.[3]?.address ?? 'Valor Padrão';

  return (
    <main>
      <Link href="./dashboard">Dashboard</Link>{" "}
      <Link href="./about">About</Link>{" "}
      <Link href="./products/1">Produto ID 1</Link>{" "}
      {/* <Suspense fallback={<p>Loading</p>}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Suspense> */}
      <h2>{address}</h2>
    </main>
  )
}