import { Container } from "@chakra-ui/react";

import {
  LandingBanner,
  LandingIntroNews,
  LandingLetsGetIt,
} from "@/Components/Molecules";

import { Footer } from "@/Components/Layouts";

export const Landing = () => {
  return (
    <section>
      <LandingBanner />
      <Container maxW={"5xl"}>
        <LandingIntroNews />
        <LandingLetsGetIt />
      </Container>
      <Footer />
    </section>
  );
};
