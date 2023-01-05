import React from 'react'

const StoreItem = ({data}) => {
    console.log(data)
  return (
    <div>{data.title}
    <p>{data.price}</p>
    </div>
  )
}


export default StoreItem

export async function getStaticPaths() {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()

    const paths = data.map((item) => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.id
    const response = await fetch(`https://fakestoreapi.com/products/${id}`) 
    const data = await response.json()
    
    return {
        props: {
            data
        }
    }
}


