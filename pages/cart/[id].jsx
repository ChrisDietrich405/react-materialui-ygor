import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState } from "react";

const Cart = ({ data }) => {
  const [readMore, setReadMore] = useState(false);
  const CartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Grid>
        <Grid item spacing={4}>
          <Typography variant="h4">{data.title}</Typography>
          <Image src={data.image} alt="data" height="100px" width="100px" />
          <Typography>
            {readMore ? data.description : data.description.substring(0, 100)}
            <Button
              style={{marginLeft: "10px"}}
              variant="contained"
              onClick={() => setReadMore((prevState) => !prevState)}
            >
              {readMore ? "Show Less" : "Read More"}
            </Button>
          </Typography>
          <Typography>${data.price.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
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
  const id = context?.params.id;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
