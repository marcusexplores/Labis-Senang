import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { PageHeadline } from "@/components/page/PageHeadline";
import { MediaType } from "@/components/page/constants";
import SunrisePhoto from "@/assets/photos/Day3_Sunrise.jpg";
import SunriseFamilyPhoto from "@/assets/photos/Day3_Sunrise_Family.jpg";
import SunriseAiChooPhoto from "@/assets/photos/Day3_Sunrise_AiChoo.jpg";
import SunriseAiKeePhoto from "@/assets/photos/Day3_Sunrise_AiKee.jpg";
import SunriseMindyPhoto from "@/assets/photos/Day3_Sunrise_Mindy.jpg";
import RambutanPhoto from "@/assets/photos/Day3_Rambutan.jpg";
import FuYuanPhoto from "@/assets/photos/Day3_FuYuan.jpg";
import FuYuanBaoSetPhoto from "@/assets/photos/Day3_FuYuan_BaoSet.jpg";
import FuYuanBossPhoto from "@/assets/photos/Day3_FuYuan_Boss.jpg";
import FuYuanWorkingBossPhoto from "@/assets/photos/Day3_FuYuan_Work_Boss.jpg";
import FuYuanWorkingEmployeePhoto from "@/assets/photos/Day3_FuYuan_Work_Employee.jpg";
import LunchRestaurantPhoto from "@/assets/photos/Day3_Lunch_Restaurant.jpg";
import LunchNoodlesPhoto from "@/assets/photos/Day3_Lunch_Noodles.jpg";
import LunchSoupPhoto from "@/assets/photos/Day3_Lunch_Soup.jpg";
import LunchVegetablesPhoto from "@/assets/photos/Day3_Lunch_Vegetables.jpg";
import LunchTofuPhoto from "@/assets/photos/Day3_Lunch_Tofu.jpg";
import LunchChickenPhoto from "@/assets/photos/Day3_Lunch_Chicken.jpg";
import LunchFishPhoto from "@/assets/photos/Day3_Lunch_Fish.jpg";
import LunchPorkPhoto from "@/assets/photos/Day3_Lunch_Pork.jpg";
import LayangStoreFrontPhoto from "@/assets/photos/Day3_Layang_Store_Front.jpg";
import LayangStoreInteriorPhoto from "@/assets/photos/Day3_Layang_Store_Interior.jpg";
import LayangAiKeePhoto from "@/assets/photos/Day3_Layang_Store_AiKee.jpg";

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
              media: { src: SunrisePhoto, alt: "Sunrise" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFamilyPhoto, alt: "Sunrise with Family" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseAiChooPhoto, alt: "Ai Choo and Sunrise" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseAiKeePhoto, alt: "Ai Kee and Sunrise" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseMindyPhoto, alt: "Mindy and Sunrise" },
              className: "col-span-full md:col-span-4",
            },
          ]}
        />
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
              media: { src: RambutanPhoto, alt: "Rambutan" },
              className: "col-span-full",
            },
          ]}
        />
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
              media: { src: FuYuanPhoto, alt: "Fu Yuan" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: FuYuanBossPhoto, alt: "Fu Yuan Boss" },
              className: "col-span-6 row-span-2",
            },
            {
              type: MediaType.Image,
              media: { src: FuYuanBaoSetPhoto, alt: "Fu Yuan Bao Set" },
              className: "col-span-6",
            }
          ]}
        />
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
              media: { src: FuYuanWorkingBossPhoto, alt: "Fu Yuan Boss Working" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: FuYuanWorkingEmployeePhoto, alt: "Fu Yuan Employee Working" },
              className: "col-span-6",
            },
          ]}
        />
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
              media: { src: LunchRestaurantPhoto, alt: "Restoran Wan Jia Shian" },
              className: "col-span-full",
            },
            {
              type: MediaType.Image,
              media: { src: LunchChickenPhoto, alt: "Lunch Chicken" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: LunchPorkPhoto, alt: "Lunch Pork" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: LunchFishPhoto, alt: "Lunch Fish" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: LunchNoodlesPhoto, alt: "Lunch Noodles" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: LunchSoupPhoto, alt: "Lunch Soup" },
              className: "col-span-6 row-span-2 md:row-span-1",
            },
            {
              type: MediaType.Image,
              media: { src: LunchTofuPhoto, alt: "Lunch Tofu" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: LunchVegetablesPhoto, alt: "Lunch Vegetables" },
              className: "col-span-6",
            }
          ]}
        />
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
              media: { src: LayangStoreFrontPhoto, alt: "Layang Food" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: LayangAiKeePhoto, alt: "Ai Kee at Layang Food" },
              className: "col-span-6 row-span-2",
            },
            {
              type: MediaType.Image,
              media: { src: LayangStoreInteriorPhoto, alt: "Layang Food Interior" },
              className: "col-span-6",
            },
          ]}
        />
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
      </PageContainer>
    </Page>
  );
};
