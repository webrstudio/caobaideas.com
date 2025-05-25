"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { Container, Title } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Events = () => {
  return (
    <Container>
      <Title title="Eventos" />
      <Slide triggerOnce>
        <div className="smallContainer">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 2000, disableOnInteraction:false}}
            loop={true}
          >
            <SwiperSlide>
              <figure className={`${styles.imageEvent}`}>
                <img src="https://caobaideas.com/wp-content/uploads/2024/12/MesmoRollo-cdmx-2025-1729x2048.jpeg" />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.imageEvent}>
                <img src="https://caobaideas.com/wp-content/uploads/2024/12/CONVIVENCIA-wilyn-patitas-poster-ULTIMOS-BOLETOS.png" />
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </Slide>
    </Container>
  );
};
