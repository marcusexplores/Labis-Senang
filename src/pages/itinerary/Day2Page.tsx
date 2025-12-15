import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { mediaContainerVariant } from "@/components/page/constants";
import BreakfastPhoto from "@/assets/photos/Day2_Breakfast.jpg";
import TopPreparationPhoto from "@/assets/photos/Day2_Top_Preparation.jpg";
import TopOutcomePhoto from "@/assets/photos/Day2_Top_Outcome.jpg";
import HingKheePhoto from "@/assets/photos/Day2_HingKhee.jpg";
import HingKheePreparationPhoto from "@/assets/photos/Day2_HingKhee_Preparation.jpg";
import HingKheeReadyPhoto from "@/assets/photos/Day2_HingKhee_Ready.jpg";
import HingKheeAiChooPhoto from "@/assets/photos/Day2_HingKhee_Ready_Aichoo.jpg";
import HockHoeSengPhoto from "@/assets/photos/Day2_HockHoeSeng.jpg";
import TempleOverviewPhoto from "@/assets/photos/Day2_Temple_Overview.jpg";
import TempleFionaMindyPhoto from "@/assets/photos/Day2_Temple_FionaMindy.jpg";
import TempleFamilyPhoto from "@/assets/photos/Day2_Temple_Family.jpg";
import BirdNestPhoto from "@/assets/photos/Day2_BirdNest.jpg";
import SwallowPhoto from "@/assets/photos/Day2_Swallow.jpg";
import LunchRestaurantPhoto from "@/assets/photos/Day2_Lunch_Restaurant.jpg";
import LunchEggPhoto from "@/assets/photos/Day2_Lunch_Egg.jpg";
import LunchSoupPhoto from "@/assets/photos/Day2_Lunch_Soup.jpg";
import LunchVegetablesPhoto from "@/assets/photos/Day2_Lunch_Vegetables.jpg";
import LunchFishPhoto from "@/assets/photos/Day2_Lunch_Fish.jpg";
import LunchTofuPhoto from "@/assets/photos/Day2_Lunch_Tofu.jpg";
import LunchMeatPhoto from "@/assets/photos/Day2_Lunch_Meat.jpg";
import AikHoePhoto from "@/assets/photos/Day2_AikHoe.jpg";
import AikHoeGoodsPhoto from "@/assets/photos/Day2_AikHoe_Goods.jpg";
import AikHoeFamilyPhoto from "@/assets/photos/Day2_AikHoe_Family.jpg";
import AikHoeMindyPhoto from "@/assets/photos/Day2_AikHoe_Mindy.jpg";

export const Day2Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 2</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          13 December 2025
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Image}
          data={{ src: BreakfastPhoto, alt: "Breakfast" }}
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Quilt}
          data={[
            {
              data: { src: TopPreparationPhoto, alt: "Top-making Preparation" },
              className: "col-span-6 row-span-1",
            },
            {
              data: { src: TopOutcomePhoto, alt: "Top-Making Outcome" },
              className: "col-span-6 row-span-1",
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Quilt}
          data={[
            {
              data: { src: HingKheePhoto, alt: "Hing Khee Name" },
              className: "col-span-4 row-span-1",
            },
            {
              data: { src: HingKheePreparationPhoto, alt: "Bao-making Preparation" },
              className: "col-span-8 row-span-1",
            },
            {
              data: { src: HingKheeReadyPhoto, alt: "Bao Designs" },
              className: "col-span-8 row-span-1",
            },
            {
              data: { src: HingKheeAiChooPhoto, alt: "Ai Choo with Baos" },
              className: "col-span-4 row-span-1",
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Image}
          data={{ src: HockHoeSengPhoto, alt: "Hock Hoe Seng" }}
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Quilt}
          data={[
            {
              data: { src: TempleOverviewPhoto, alt: "Temple Overview" },
              className: "col-span-12 md:col-span-4 row-span-1",
            },
            {
              data: { src: TempleFamilyPhoto, alt: "Family at Temple" },
              className: "col-span-6 md:col-span-4 row-span-1",
            },
            {
              data: { src: TempleFionaMindyPhoto, alt: "Fiona and Mindy at Temple" },
              className: "col-span-6 md:col-span-4 row-span-1",
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Quilt}
          data={[
            {
              data: { src: BirdNestPhoto, alt: "Bird Nest" },
              className: "col-span-4 row-span-1",
            },
            {
              data: { src: SwallowPhoto, alt: "Swallow" },
              className: "col-span-8 row-span-1",
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Quilt}
          data={[
            {
              data: { src: LunchRestaurantPhoto, alt: "Lunch Restaurant" },
              className: "col-span-12 md:col-span-4 row-span-1",
            },
            {
              data: { src: LunchFishPhoto, alt: "Lunch Fish" },
              className: "col-span-6 md:col-span-4 row-span-1",
            },
            {
              data: { src: LunchMeatPhoto, alt: "Lunch Meat" },
              className: "col-span-6 md:col-span-4 row-span-1",
            },
            {
              data: { src: LunchEggPhoto, alt: "Lunch Egg" },
              className: "col-span-6 md:col-span-3 row-span-1",
            },
            {
              data: { src: LunchTofuPhoto, alt: "Lunch Tofu" },
              className: "col-span-6 md:col-span-3 row-span-1",
            },
            {
              data: { src: LunchVegetablesPhoto, alt: "Lunch Vegetables" },
              className: "col-span-6 md:col-span-3 row-span-1",
            },
            {
              data: { src: LunchSoupPhoto, alt: "Lunch Soup" },
              className: "col-span-6 md:col-span-3 row-span-1",
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Quilt}
          data={[
            {
              data: { src: AikHoePhoto, alt: "Aik Hoe" },
              className: "col-span-6 row-span-1",
            },
            {
              data: { src: AikHoeGoodsPhoto, alt: "Aik Hoe Goods" },
              className: "col-span-6 row-span-1",
            },
            {
              data: { src: AikHoeFamilyPhoto, alt: "Family at Kedai Roti Aik Hoe" },
              className: "col-span-8 row-span-1",
            },
            {
              data: { src: AikHoeMindyPhoto, alt: "Mindy with boss of Kedai Roti Aik Hoe" },
              className: "col-span-4 row-span-1",
            },
          ]}
        />
      </PageContainer>
    </Page>
  );
}