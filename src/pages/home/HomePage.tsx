import { Link } from "react-router";
import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { Button } from "@/components/button/Button";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import HeroBanner from "@/assets/photos/Home_Banner.jpg";

export const HomePage = () => {
  return (
    <Page hideTopPadding>
      <section className="relative w-full overflow-hidden min-h-screen flex justify-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBanner})` }}
        ></div>
      </section>
      <PageContainer>
        <PageContainerItem className="mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </PageContainerItem>
        <PageContainerItem>
          <Button asChild>
            <Link to={NAVIGATION_KEY.ITINERARY_DAY_1}>View Day 1</Link>
          </Button>
          <Button asChild>
            <Link to={NAVIGATION_KEY.ITINERARY_DAY_2}>View Day 2</Link>
          </Button>
          <Button asChild>
            <Link to={NAVIGATION_KEY.ITINERARY_DAY_3}>View Day 3</Link>
          </Button>
        </PageContainerItem>
      </PageContainer>
    </Page>
  );
};
