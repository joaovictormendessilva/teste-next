interface IProductLayoutProps {
  children: React.ReactNode
}

export default function ProductLayout({ children }: IProductLayoutProps) {
  return (
    <div>
      <h2>Product</h2>
      {children}
    </div>
  )
}