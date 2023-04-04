const { useRouter } = require("next/router");

import React from 'react'

const Product = ({product}) => {
    const router = useRouter()
    if(router.isFallback){
        <div>Loading....</div>
    }
  return (
    <>
          <h2>{product?.id} {product?.title} {product?.price}</h2>
          <p>{product?.description}</p>
          <hr />

    </>
  )
}

export default Product





export async function getStaticProps(context) {
    const {params}= context
    console.log(`regenerating product ${params.productId}`);
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()
    return {
        props: {
            product: data,
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { productId: '1' } },
            { params: { productId: '2' } },
            { params: { productId: '3' } }
    ],
        fallback: true
    }
}