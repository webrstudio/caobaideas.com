"use client";
import "./styles/globals.css";
import { useState, useEffect } from "react";
import { NavBar, Loader, Footer } from "@/components";
import { UserProvider, ThemeProvider } from "@/contexts";

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
