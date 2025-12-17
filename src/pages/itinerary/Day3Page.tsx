import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { PageHeadline } from "@/components/page/PageHeadline";
import { MediaType } from "@/components/page/constants";
import Sunrise from "@/assets/photos/Day3_Sunrise.jpg";
import SunriseFamily from "@/assets/photos/Day3_Sunrise_Family.jpg";
import SunriseAiChoo from "@/assets/photos/Day3_Sunrise_AiChoo.jpg";
import SunriseAiKee from "@/assets/photos/Day3_Sunrise_AiKee.jpg";
import SunriseMindy from "@/assets/photos/Day3_Sunrise_Mindy.jpg";

export const Day3Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 3</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          14 December 2025
        </PageContainerItem>
        <PageContainerItem>
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: { src: Sunrise, alt: "Sunrise" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFamily, alt: "Sunrise with Family" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseAiChoo, alt: "Ai Choo and Sunrise" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseAiKee, alt: "Ai Kee and Sunrise" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseMindy, alt: "Mindy and Sunrise" },
              className: "col-span-12 md:col-span-4",
            },
          ]}
        />
      </PageContainer>
    </Page>
  );
};
