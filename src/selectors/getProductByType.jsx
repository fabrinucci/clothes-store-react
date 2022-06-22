import { products } from "../data/products"

export const getProductByType = ( type ) => {

  const validType = ['Accessory', 'Clothe']

  if( validType.includes(type) ) {
    throw new Error(`${ type } is not a valid type`)
  }
  return products.filter( product => product.type === type )
} 