"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useFetch } from "@/hooks";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { Container, Title } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export const Events = () => {
  const { isLoading, data } = useFetch({
    url: `${process.env.NEXT_PUBLIC_API}/events/getAllEvents/index.php`,
  });
  console.log(data);
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
            {isLoading && !data
              ? null
              : data.map((event) => (
                  <SwiperSlide key={event.evento_id}>
                    <a href={event.evento_link} target="_blank">
                      <figure className={`${styles.imageEvent}`}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_SERVER_NAME}/event-images/${event.evento_imagen}`}
                        />
                      </figure>
                    </a>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </Slide>
    </Container>
  );
};
