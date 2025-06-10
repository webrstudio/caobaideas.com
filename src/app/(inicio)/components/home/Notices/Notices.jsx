"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext } from "react";
import { useFetch } from "@/hooks";
import styles from "./styles.module.css";
import { ThemeContext } from "@/contexts";
import { Slide } from "react-awesome-reveal";
import { Spotify } from "react-spotify-embed";
import { Container, Title } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Notices = () => {
  const { lightMode } = useContext(ThemeContext);
  const { isLoading, data } = useFetch({
    url: `${process.env.NEXT_PUBLIC_API}/posts/getAllPosts/index.php`,
  });
  return (
    <Container
      bgClassName={!lightMode ? "bgBlackSecondary" : "bgWhiteSecondary"}
    >
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
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className={styles.noticePlaylist}
          >
            {!isLoading && data
              ? data.map((post) => (
                  <SwiperSlide key={post.noticia_id}>
                    <div className={styles.noticeWrapper}>
                      <figure className={styles.noticeImage}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_SERVER_NAME}/post-images/${post.noticia_imagen}`}
                        />
                      </figure>
                      <h4 className={styles.noticeTitle}>
                        {post.noticia_titulo}
                      </h4>
                    </div>
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
      </Slide>
    </Container>
  );
};
