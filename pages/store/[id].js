import { Container, Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
const StoreItem = ({ data }) => {
  return (
   
      <Grid container spacing={2} margin="0 auto" sx={{ m: 6 }}>
        <Grid
          item
          xs={3}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          boxShadow="1px 1px 1px blue"
        >
          <h4>{data.title}</h4>
          <Image src={data.image} width={111} height={111} alt={data.title} />
          <p>{data.price}</p>
        </Grid>
      </Grid>
  );
};

export default StoreItem;

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

export async function getStaticProps(context) {
  const id = context?.params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
