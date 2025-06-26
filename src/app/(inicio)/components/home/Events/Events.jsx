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
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <figure className={`${styles.imageEvent}`}>
                <img src={`${process.env.NEXT_PUBLIC_SERVER_NAME}/event-images/event-1.jpg`} />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.imageEvent}>
                <img src={`${process.env.NEXT_PUBLIC_SERVER_NAME}/event-images/event-2.jpg`} />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.imageEvent}>
                <img src={`${process.env.NEXT_PUBLIC_SERVER_NAME}/event-images/event-3.jpg`} />
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </Slide>
    </Container>
  );
};
