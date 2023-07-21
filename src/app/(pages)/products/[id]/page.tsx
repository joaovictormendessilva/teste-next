interface IProductProps {
  params: {
    id: string
  }
}

export default function Product({ params }: IProductProps) {
  return (
    <h2>O id do produto é: {params.id}</h2>
  )
}