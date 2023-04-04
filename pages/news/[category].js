import React from 'react'
const ArticleListByCategory = ({ articles, category }) => {
    return (
        <div>
            <h1>List of news articles for {category}</h1>
            {
                articles?.map(article => (
                    <div key={article.id}>
                        <h2>{article.id}.   {article.title} | {article.category}</h2>
                        {/* <Link href={`/products/${product.id}`} > */}
                        {/* </Link> */}
                        <hr />
                        <p>{article.description}</p>
                    </div>

                ))
            }

        </div>
    )
}
export default ArticleListByCategory

export async function getServerSideProps(context) {
    const { params, res, req, query } = context
    console.log(query);
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=GT'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json()
    return {
        props: {
            articles: data,
            category,
        }
    }
}
