"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { Spotify } from "react-spotify-embed";
import { Container, Title } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Notices = () => {
  return (
    <Container>
      <Title title="Últimas noticias" />
      <Slide triggerOnce>
        <div className={`${styles.noticesWrapper} smallContainer`}>
          <Spotify
            link="https://open.spotify.com/playlist/5woKePuQtBUik9SqC0tTSO?si=isJgAWMDT0e4acLuqoq0rg&pi=XcDXNW6-SF6lv&nd=1&dlsi=ad0066be5c47423e"
            className={styles.noticePlaylist}
          />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={100}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <div className={styles.noticeWrapper}>
                <figure className={styles.noticeImage}>
                  <img src="https://caobaideas.com/wp-content/uploads/2025/03/canciones-de-wilyn-y-los-mesmos.png" />
                </figure>
                <h4 className={styles.noticeTitle}>
                  Las canciones de Wilyn y Los Mesmos ¡ya en plataformas!
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.noticeWrapper}>
                <figure className={styles.noticeImage}>
                  <img src="https://caobaideas.com/wp-content/uploads/2025/03/canciones-de-wilyn-y-los-mesmos.png" />
                </figure>
                <h4 className={styles.noticeTitle}>
                  Las canciones de Wilyn y Los Mesmos ¡ya en plataformas!
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Slide>
    </Container>
  );
};
