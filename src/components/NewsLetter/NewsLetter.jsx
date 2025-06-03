"use client";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import styles from "./styles.module.css";
import { Container, Title } from "@/components";

export const NewsLetter = () => {
  const [userInfo, setUserInfo] = useState(null);
  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/newsletter/addNewSuscription/index.php`,
        userInfo
      );
      if (response.status === 200) {
        evt.target.reset()
        setUserInfo(null)
        return Swal.fire({
          title: response.data.message,
          timer: 2000,
          showConfirmButton: false,
          showCloseButton: true,
          icon: "success",
          position: "top-end",
        });
      }
    } catch (error) {
      return Swal.fire({
        title: "Oops, algo ha ocurrido mal",
        text: "Por favor, intene nuevamente",
        timer: 2000,
        showConfirmButton: false,
        showCloseButton: true,
        icon: "success",
        position: "top-end",
      });
    }
  };
  const onChange = (evt) => {
    setUserInfo({
      ...userInfo,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <Container>
      <Title title="Suscríbete a nuestra newsletter" />
      <div className={`${styles.newsLetterWrapper} smallContainer`} id='newsletter'>
        <form
          onSubmit={onSubmit}
          className={`${styles.newsLetterForm} borderRadius boxShadow`}
        >
          <label>Ingresa tu nombre:</label>
          <input
            type="text"
            required
            name="registro_nombre"
            onChange={onChange}
          />
          <label>Ingresa tu correo:</label>
          <input
            type="email"
            required
            name="registro_email"
            onChange={onChange}
          />
          <button className={styles.newsLetterFormButton}>Suscribirme</button>
        </form>
      </div>
    </Container>
  );
};
