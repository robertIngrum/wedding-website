import {
  Inter,
  Dancing_Script,
  Merriweather,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"]
});

const dancingScript = Dancing_Script({
  subsets: ["latin"]
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});


export {
  inter,
  dancingScript,
  merriweather
};
