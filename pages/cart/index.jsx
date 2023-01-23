import React from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const [readMore, setReadMore] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNum, setTotalNum] = useState(0);

  const router = useRouter();

  const filterCartItems = () => {
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    let reduced = [];

    cartItems.forEach((item) => {
      const duplicated =
        reduced.findIndex((redItem) => {
          return item.id == redItem.id;
        }) > -1;

      if (!duplicated) {
        reduced.push(item);
      }
    });

    reduced.map((item) =>
      setTotalPrice((totalPrice) => totalPrice + item.price)
    );

    setTotalNum(reduced.length);

    setCartItems(reduced);
  };

  useEffect(() => {
    filterCartItems();
  }, []);

  return (
    <Container sx={{ marginTop: "100px", display: "flex" }}>
      <Grid container>
        <Grid item spacing={4} xs={8}>
          {cartItems.map((data) => {
            return (
              <>
                <Card
                  key={data.id}
                  item
                  spacing={4}
                  sx={{ width: "70%", mb: 4, p: 4 }}
                >
                  <Typography my={4} variant="h6" sx={{ fontWeight: "bold" }}>
                    {data.title}
                  </Typography>
                  <Image
                    src={data.image}
                    alt="data"
                    height="100px"
                    width="100px"
                  />
                  <Typography variant="p">${data.price.toFixed(2)}</Typography>
                  <Typography>
                    {readMore
                      ? data.description
                      : data.description.substring(0, 100)}
                    <Button
                      style={{ marginLeft: "10px" }}
                      variant="contained"
                      onClick={() => setReadMore((prevState) => !prevState)}
                    >
                      {readMore ? "Show Less" : "Read More"}
                    </Button>
                    <Button
                      style={{ marginLeft: "10px" }}
                      variant="contained"
                      onClick={() => router.push("/store")}
                    >
                      Back to Store
                    </Button>
                  </Typography>
                </Card>
              </>
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ p: 4 }}>
            <Typography variant="h4">Total</Typography>
            <div>
              <Typography variant="p">Total Items: {totalNum}</Typography>
            </div>
            <Typography variant="p">
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cart;
