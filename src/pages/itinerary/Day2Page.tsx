import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { PageHeadline } from "@/components/page/PageHeadline";
import { MediaType } from "@/components/page/constants";
import BreakfastPhoto from "@/assets/photos/Day2_Breakfast.jpg";
import TopPreparationPhoto from "@/assets/photos/Day2_Top_Preparation.jpg";
import TopOutcomePhoto from "@/assets/photos/Day2_Top_Outcome.jpg";
import HingKheePhoto from "@/assets/photos/Day2_HingKhee.jpg";
import HingKheePreparationPhoto from "@/assets/photos/Day2_HingKhee_Preparation.jpg";
import HingKheeReadyPhoto from "@/assets/photos/Day2_HingKhee_Ready.jpg";
import HingKheeAiChooPhoto from "@/assets/photos/Day2_HingKhee_Ready_Aichoo.jpg";
import HingKheeServedPhoto from "@/assets/photos/Day2_HingKhee_Served.jpg";
import HingKheeBaoMakingVideo from "@/assets/videos/Day2_HingKhee_BaoMakingProcess.mp4";
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
import LorongSeniPhoto from "@/assets/photos/Day2_LorongSeni.jpg";
import LorongSeniPathPhoto from "@/assets/photos/Day2_LorongSeni_Path.jpg";
import LorongSeniFamilyPhoto from "@/assets/photos/Day2_LorongSeni_Family.jpeg";
import LorongSeniArt1Photo from "@/assets/photos/Day2_LorongSeni_Art1.jpg";
import LorongSeniArt2Photo from "@/assets/photos/Day2_LorongSeni_Art2.jpg";
import LorongSeniArt3Photo from "@/assets/photos/Day2_LorongSeni_Art3.jpg";
import LorongSeniGatePhoto from "@/assets/photos/Day2_LorongSeni_Gate.jpg";
import JejakWarisanPhoto from "@/assets/photos/Day2_JejakWarisan.jpg";
import TrainBuildingPhoto from "@/assets/photos/Day2_TrainBuilding.jpg";
import TrainBuildingSidePhoto from "@/assets/photos/Day2_TrainBuilding_Side.jpg";
import FuMeiPhoto from "@/assets/photos/Day2_FuMei.jpg";
import SunsetAiChooPhoto from "@/assets/photos/Day2_Sunset_AiChoo.jpg";
import SunsetKokSengPhoto from "@/assets/photos/Day2_Sunset_KokSeng.jpg";
import SunsetAuntPhoto from "@/assets/photos/Day2_Sunset_Aunt.jpg";
import SunsetAiKeePhoto from "@/assets/photos/Day2_Sunset_AiKee.jpg";
import SunsetFionaPhoto from "@/assets/photos/Day2_Sunset_Fiona.jpg";
import SunsetMindyPhoto from "@/assets/photos/Day2_Sunset_Mindy.jpg";
import SunsetMarcusPhoto from "@/assets/photos/Day2_Sunset_Marcus.jpg";
import DinnerHotpotPhoto from "@/assets/photos/Day2_Dinner_Hotpot.jpg";
import DinnerFriedFoodPhoto from "@/assets/photos/Day2_Dinner_FriedFood.jpg";
import BeetlePhoto from "@/assets/photos/Day2_Beetle.jpg";
import BeetleRescuePhoto from "@/assets/photos/Day2_Beetle_Rescue.jpg";
import SkyLanternVideo from "@/assets/videos/Day2_SkyLantern.mp4";

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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: { src: BreakfastPhoto, alt: "Breakfast" },
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
              media: {
                src: TopPreparationPhoto,
                alt: "Top-making Preparation",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: TopOutcomePhoto, alt: "Top-Making Outcome" },
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
              media: { src: HingKheePhoto, alt: "Hing Khee Name" },
              className: "col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: HingKheePreparationPhoto,
                alt: "Bao-making Preparation",
              },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: { src: HingKheeReadyPhoto, alt: "Bao Designs" },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: { src: HingKheeAiChooPhoto, alt: "Ai Choo with Baos" },
              className: "col-span-4",
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
              type: MediaType.Video,
              media: { src: HingKheeBaoMakingVideo },
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
              media: { src: HockHoeSengPhoto, alt: "Hock Hoe Seng" },
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
              media: { src: TempleOverviewPhoto, alt: "Temple Overview" },
              className: "col-span-full md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: TempleFamilyPhoto, alt: "Family at Temple" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: TempleFionaMindyPhoto,
                alt: "Fiona and Mindy at Temple",
              },
              className: "col-span-6 md:col-span-4",
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
              media: { src: BirdNestPhoto, alt: "Bird Nest" },
              className: "col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SwallowPhoto, alt: "Swallow" },
              className: "col-span-8",
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
              media: { src: LunchRestaurantPhoto, alt: "Lunch Restaurant" },
              className: "col-span-full md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: LunchFishPhoto, alt: "Lunch Fish" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: LunchMeatPhoto, alt: "Lunch Meat" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: LunchEggPhoto, alt: "Lunch Egg" },
              className: "col-span-6 md:col-span-3",
            },
            {
              type: MediaType.Image,
              media: { src: LunchTofuPhoto, alt: "Lunch Tofu" },
              className: "col-span-6 md:col-span-3",
            },
            {
              type: MediaType.Image,
              media: { src: LunchVegetablesPhoto, alt: "Lunch Vegetables" },
              className: "col-span-6 md:col-span-3",
            },
            {
              type: MediaType.Image,
              media: { src: LunchSoupPhoto, alt: "Lunch Soup" },
              className: "col-span-6 md:col-span-3",
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
              media: { src: AikHoePhoto, alt: "Aik Hoe" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: AikHoeGoodsPhoto, alt: "Aik Hoe Goods" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: AikHoeFamilyPhoto,
                alt: "Family at Kedai Roti Aik Hoe",
              },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: {
                src: AikHoeMindyPhoto,
                alt: "Mindy with boss of Kedai Roti Aik Hoe",
              },
              className: "col-span-4",
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
              media: { src: LorongSeniPhoto, alt: "Lorong Seni" },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: { src: LorongSeniPathPhoto, alt: "Lorong Seni Path" },
              className: "col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: LorongSeniFamilyPhoto,
                alt: "Family at Lorong Seni",
              },
              className: "col-span-full",
            },
            {
              type: MediaType.Image,
              media: { src: LorongSeniArt1Photo, alt: "Lorong Seni Art 1" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: LorongSeniArt2Photo, alt: "Lorong Seni Art 2" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: LorongSeniArt3Photo, alt: "Lorong Seni Art 3" },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: { src: LorongSeniGatePhoto, alt: "Lorong Seni Gate" },
              className: "col-span-4",
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
              media: { src: JejakWarisanPhoto, alt: "Jejak Warisan" },
              className: "col-span-full max-w-md mx-auto",
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
              media: { src: TrainBuildingPhoto, alt: "Buidling with a Train" },
              className: "col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: TrainBuildingSidePhoto,
                alt: "Side view of Buidling with a Train",
              },
              className: "col-span-8",
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
              media: { src: FuMeiPhoto, alt: "Fu Mei" },
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
              media: {
                src: HingKheeServedPhoto,
                alt: "Cooked Bao at Hing Khee",
              },
              className: "col-span-full max-w-md mx-auto",
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
              media: { src: SunsetAiChooPhoto, alt: "Ai Choo and Sunset" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunsetKokSengPhoto, alt: "Kok Seng and Sunset" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunsetAiKeePhoto, alt: "Ai Kee and Sunset" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunsetAuntPhoto, alt: "Aunt and Sunset" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunsetFionaPhoto, alt: "Fiona and Sunset" },
              className: "col-span-full md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunsetMindyPhoto, alt: "Mindy and Sunset" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunsetMarcusPhoto, alt: "Marcus and Sunset" },
              className: "col-span-6 md:col-span-4",
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
              media: { src: DinnerHotpotPhoto, alt: "Steamboat Dinner" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: DinnerFriedFoodPhoto, alt: "Fried Food" },
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
              type: MediaType.Video,
              media: { src: SkyLanternVideo },
              className: "col-span-full max-w-md mx-auto",
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
              media: { src: BeetlePhoto, alt: "Beetle" },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: { src: BeetleRescuePhoto, alt: "Beetle Rescue" },
              className: "col-span-4",
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
