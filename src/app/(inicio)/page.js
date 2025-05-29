import {
  Jumbotron,
  Talent,
  Events
} from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Talent />
      <Events />
    </main>
  );
}

export const metadata = {
  title: "  CAOBA IDEAS - INICIO",
  description: "",
  icons: {
    icon: "/assets/images/logo/icon.png",
  },
};
