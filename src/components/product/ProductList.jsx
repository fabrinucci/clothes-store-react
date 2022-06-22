import { getProductByType } from "../../selectors/getProductByType"


export const ProductList = ({ type }) => {

  const products = getProductByType(type)

  return (
    <>
      <h1>Product List - { type }</h1>

      <ul>
        {products.map( product => (
          <li key={ product.id }>
            { product.title }
          </li>
        ))}
      </ul>
    </>
  )
}
