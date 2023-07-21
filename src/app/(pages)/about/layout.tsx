interface Metadata {
  title: string
  description: string
}

interface IAboutLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Página de about',
}

export default function AboutLayout({ children }: IAboutLayoutProps) {
  return (
    <div>
      <h2>About</h2>
      {children}
    </div>
  )
}