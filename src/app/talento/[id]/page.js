import { Talent } from "../components/talent";

export default function({params}){
    console.log(params)
    return (
        <>
          <Talent />
        </>
    )
}

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export const metadata = {
  title: "  CAOBA IDEAS - TALENTO",
  description: "",
  icons: {
    icon: "/assets/images/logo/icon.png",
  },
};