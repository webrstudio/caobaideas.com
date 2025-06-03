"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { ThemeContext } from "@/contexts";
import { IoMdClose } from "react-icons/io";
import { useState, useContext } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

export const NavBar = () => {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const activeMenu = () => setIsActive(!isActive);
  const { lightMode, changeMode } = useContext(ThemeContext);
  return (
    <header className={styles.headerWrapper}>
      <nav className={`${styles.navWrapper} flexContainer`}>
        <Link href="/" className={styles.navLogo}>
          <img src="/assets/images/logo/logo.png" atl="CAOBA IDEAS" />
        </Link>
        <button className={styles.buttonMenu} onClick={activeMenu}>
          {!isActive ? <HiMiniBars3 /> : <IoMdClose />}
        </button>
        <ul className={`${styles.navList} ${!isActive ? "" : styles.active}`}>
          <li>
            <Link href="/" onClick={activeMenu}>
              Inicio
            </Link>
          </li>
          {path !== "/" ? null : (
            <li>
              <a href="#talento" onClick={activeMenu}>
                Talento
              </a>
            </li>
          )}
          <li>
            <Link href="/" onClick={activeMenu}>
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/" onClick={activeMenu}>
              Nosotros
            </Link>
          </li>
          <li>
            <a href="#newsletter" onClick={activeMenu}>
              Newsletter
            </a>
          </li>
          <li>
            <button
              className={styles.switchButton}
              onClick={() => {
                changeMode();
                activeMenu();
              }}
            >
              {!lightMode ? <IoSunny /> : <IoMoonSharp />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
