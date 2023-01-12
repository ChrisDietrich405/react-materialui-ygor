import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const [readMore, setReadMore] = useState(false);
 

  // let CartItems;
  // useEffect(() => {
  //   CartItems = localStorage.getItem("cart")
  //     ? JSON.parse(localStorage.getItem("cart"))
  //     : [];
  // }, []);

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Grid>
        {CartItems.map((data) => {
          return (
            <>
              <Grid key={data.id} item spacing={4}>
                <Typography variant="h4">{data.title}</Typography>
                <Image
                  src={data.image}
                  alt="data"
                  height="100px"
                  width="100px"
                />
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
                </Typography>
                <Typography>${data.price.toFixed(2)}</Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Cart;