interface IDashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
  return (
    <div>
      <h2>Dashboard</h2>
      {children}
    </div>
  )
}