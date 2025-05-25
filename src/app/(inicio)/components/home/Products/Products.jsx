"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useContext } from "react";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { Container, GridContainer, Title, ProductCard } from "@/components";
import { ShoppingCartContext } from "@/contexts";

export const Products = () => {
  const { addProduct, allProducts } = useContext(ShoppingCartContext);
  const showModal = () => {
    Swal.fire({
      title: "Añadido al carrito",
      icon: "success",
      timer: 1000,
      position: "top-center",
      showConfirmButton: false,
    });
    return addProduct(product);
  };
  return (
    <Container>
      <Title title="TIENDA OFICIAL GOLDEN" blackColor />
      <Slide triggerOnce>
        <div className={`${styles.mainProductWrapper} flexContainer`}>
          <figure className={styles.mainProductImage}>
            <img src="/assets/images/products/product-1.png" />
          </figure>
          <div className={styles.mainProductDescription}>
            <span className={styles.mainProductTitle}>
              ISOLATE GOLD STANDARD - 10kg
            </span>
            <div className={styles.mainProductButtons}>
              <Link href={`/`} className={styles.mainProductButton}>
                Comprar ahora
              </Link>
              <span className={styles.mainProductButton} onClick={showModal}>
                Agregar al carrito
              </span>
            </div>
          </div>
        </div>
      </Slide>
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
