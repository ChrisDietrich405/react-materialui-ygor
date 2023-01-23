import React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Store = ({ data }) => {
  const router = useRouter();

  function goToDetails(item) {
    const CartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const newCart = [...CartItems, item];
    localStorage.setItem("cart", JSON.stringify(newCart));
    router.push(`/store/${item.id}`);
  }

  const addToCart = (item) => {
    const CartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const newCart = [...CartItems, item];
    localStorage.setItem("cart", JSON.stringify(newCart));
    router.push(`/cart`);
  };



  return (
    <>
      <Button onClick={() => router.push("/login")}>Log In</Button>
      <Grid container spacing={2} margin="0 auto">
        {data.map((item) => {
          return (
            <>
              <Grid
                item
                xs={3}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
              >
                <a style={{ padding: "20px", marginBottom: "20px" }}>
                  <h5
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </h5>
                  <Image
                    src={item.image}
                    width={111}
                    height={111}
                    alt={item.title}
                  />
                  <p style={{ marginLeft: "30px" }}>${item.price.toFixed(2)}</p>
                  <Button
                    sx={{ mx: 2 }}
                    onClick={() => goToDetails(item)}
                    variant="contained"
                  >
                    Details
                  </Button>
                  <Button onClick={() => addToCart(item)} variant="contained">
                    Cart
                  </Button>
                </a>
              </Grid>
              {/* </Link> */}
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Store;

export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
