import Link from "next/link"

interface IPagesLayoutProps {
  children: React.ReactNode
}

export default function PagesLayout({ children }: IPagesLayoutProps) {
  return (
    <div>
      <h1>Layout da pasta Pages</h1>
      {children}

      <Link href="/">Voltar para home</Link>
    </div>
  )
}