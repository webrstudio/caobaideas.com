import axios from "axios";
import { Talent } from "../components/talent";

export default function ({ params }) {
  return (
    <>
      <Talent url={params.id}/>
    </>
  );
}

export async function generateStaticParams() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/talents/getAllTalents/index.php`
    );
    const paths = response.data.map((e) => {
      return {id: e.talento_url}
    });
    return paths;
  } catch (error) {}
}

export const metadata = {
  title: "  CAOBA IDEAS - TALENTO",
  description: "",
  icons: {
    icon: "/assets/images/logo/icon.png",
  },
};
