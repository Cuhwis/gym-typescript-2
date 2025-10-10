import type { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import Sponsorforbes from "@/assets/Sponsorforbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const isAboveMediumScreens = useMediaQuery("(min-width:1060px")
  return <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pd-0">Home</section>;
};

export default Home;
