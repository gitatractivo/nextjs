import Link from 'next/link'
import React from 'react'

const Products = ({products}) => {
  return (
    <>
    <h1>Products</h1>
    {
        products?.map(product => (
            <div key={product.id}>
                <Link href={`/products/${product.id}`} >
                    <h2>{product.id}.   {product.title}</h2>
                </Link>
            </div>
        ))
    }
    </>
  )
}

export default Products



export async function getStaticProps(){
    console.log('regenerating')
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    return{
        props:{
            products: data,
        },
        revalidate: 10,
    }
}