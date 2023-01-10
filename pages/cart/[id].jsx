import React from "react";

const Cart = ({ data }) => {
  return <div>{data.title}</div>;
};

export default Cart;

export async function getStaticPaths() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const { id } = context?.params.id;
  console.log(id);

  

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
