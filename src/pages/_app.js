import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Navigation from "../components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} antialiased font-sans`}>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
