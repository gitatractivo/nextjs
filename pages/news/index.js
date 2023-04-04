import React from 'react'

const News = ({articles}) => {
  return (
    <div>
        <h1>List of news articles</h1>
        {
              articles?.map(article => (
                  <div key={article.id}>
                      <h2>{article.id}.   {article.title} | {article.category}</h2>
                      {/* <Link href={`/products/${product.id}`} > */}
                      {/* </Link> */}
                  </div>
              ))
        }

    </div>
  )
}

export default News




export async function getServerSideProps(){
    const response =  await fetch('http://localhost:4000/news');
    const data = await response.json()
    return {
        props:{
            articles:data
        }
    }
}