import React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Store = ({ data }) => {
  return (
    <Grid container spacing={2} margin="0 auto">
      {data.map((item) => {
        return (
          <>
            <Grid
              item
              xs={3}
              display="flex" flexDirection="column" justifyContent="space-between" boxShadow="1px 1px 1px blue">
            
              <Link href={`/store/${item.id}`} key={item.id}>
                <a style={{ padding: "20px", marginBottom: "20px" }}>
                  <h5 style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>{item.title}</h5>
                  <Image
                    src={item.image}
                    width={111}
                    height={111}
                    alt={item.title}
                  />
                  <p style={{marginLeft: "30px"}}>${item.price.toFixed(2)}</p>
                  <Button variant="contained">Add to Cart</Button>
                </a>
              </Link>
            </Grid>
          </>
        );
      })}
    </Grid>
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
