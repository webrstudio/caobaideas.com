"use client";
import {
  Container,
  Title,
  GridContainer,
  ProductCard,
} from "@/components";
import { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { ShoppingCartContext } from "@/contexts";

export const Products = () => {
  const { allProducts } = useContext(ShoppingCartContext);
  return (
    <Container>
      <Title title="TIENDA OFICIAL GOLDEN" blackColor />
      <Slide triggerOnce>
        <GridContainer>
          {allProducts.map((product) => (
            <ProductCard product={product} key={product.producto_id} />
          ))}
        </GridContainer>
      </Slide>
    </Container>
  );
};
