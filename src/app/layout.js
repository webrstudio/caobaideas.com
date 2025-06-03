"use client";
import "./styles/globals.css";
import { useState, useEffect } from "react";
import { UserProvider, ThemeProvider } from "@/contexts";
import { NavBar, Loader, Footer, NewsLetter } from "@/components";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <ThemeProvider>
      <UserProvider>
        <html lang="es">
          <body>
            {!loading ? (
              <>
                <NavBar />
                {children}
                <NewsLetter />
                <Footer />
              </>
            ) : (
              <Loader fullScreen />
            )}
          </body>
        </html>
      </UserProvider>
    </ThemeProvider>
  );
}
