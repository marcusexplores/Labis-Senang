import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { PageHeadline } from "@/components/page/PageHeadline";
import { MediaType } from "@/components/page/constants";
import TemplePhoto from "@/assets/photos/Day1_Temple.jpg";
import TempleWefiePhoto from "@/assets/photos/Day1_Temple_Wefie.jpg";
import TempleBridgePhoto from "@/assets/photos/Day1_Temple_Bridge.jpg";
import TempleColorsPhoto from "@/assets/photos/Day1_Temple_Colors.jpg";
import TempleWishingTreePhoto from "@/assets/photos/Day1_Temple_WishingTree.jpg";
import TempleWheelInstructionsPhoto from "@/assets/photos/Day1_Temple_Wheel_Instructions.jpg";
import TempleWheelPhoto from "@/assets/photos/Day1_Temple_Wheel.jpg";
import TempleWheelAiChooPhoto from "@/assets/photos/Day1_Temple_Wheel_AiChoo.jpg";
import TempleWheelAiKeePhoto from "@/assets/photos/Day1_Temple_Wheel_AiKee.jpg";
import GardenEntrancePhoto from "@/assets/photos/Day1_Garden_Entrance.jpg";
import GardenColorsPhoto from "@/assets/photos/Day1_Garden_Colors.jpg";
import GardenFlowerKokSengPhoto from "@/assets/photos/Day1_Garden_Flower_KokSeng.jpg";
import GardenFlowerSistersPhoto from "@/assets/photos/Day1_Garden_Flower_Sisters.jpg";
import GardenIceCreamPhoto from "@/assets/photos/Day1_Garden_IceCream.jpg";
import GardenAiKeePhoto from "@/assets/photos/Day1_Garden_AiKee.jpeg";
import YongJuanHinMenu1Photo from "@/assets/photos/Day1_YongJuanHin_Menu1.jpg";
import YongJuanHinMenu2Photo from "@/assets/photos/Day1_YongJuanHin_Menu2.jpg";
import YongJuanHinDrinksPhoto from "@/assets/photos/Day1_YongJuanHin_Drinks.jpg";
import YongJuanHinFoodPhoto from "@/assets/photos/Day1_YongJuanHin_Food.jpg";
import YiPinShaoPhoto from "@/assets/photos/Day1_YiPinShao.jpg";
import YiPinShaoInteriorPhoto from "@/assets/photos/Day1_YiPinShao_Interior.jpg";
import YiPinShaoSoupPhoto from "@/assets/photos/Day1_YiPinShao_Soup.jpg";
import YiPinShaoFoodPhoto from "@/assets/photos/Day1_YiPinShao_Food.jpg";
import SunriseFarmNamePhoto from "@/assets/photos/Day1_SunriseFarm_Name.jpg";
import SunriseFarmEntrancePhoto from "@/assets/photos/Day1_SunriseFarm_Entrance.jpg";
import SunriseFarmReceptionPhoto from "@/assets/photos/Day1_SunriseFarm_Reception.jpg";
import SunriseFarmStagePhoto from "@/assets/photos/Day1_SunriseFarm_Stage.jpg";
import SunriseFarmSantaPhoto from "@/assets/photos/Day1_SunriseFarm_Santa.jpg";
import SunriseFarmCarPhoto from "@/assets/photos/Day1_SunriseFarm_Car.jpg";
import SunriseFarmUmbrellaPhoto from "@/assets/photos/Day1_SunriseFarm_Umbrella.jpg";
import SunriseFarmWatermelonPhoto from "@/assets/photos/Day1_SunriseFarm_Watermelon.jpg";
import SunriseFarmRabbitPhoto from "@/assets/photos/Day1_SunriseFarm_Rabbit.jpg";
import SunriseFarmMainRoomPhoto from "@/assets/photos/Day1_SunriseFarm_Room_Main.jpg";
import SunriseFarmBedroom1Photo from "@/assets/photos/Day1_SunriseFarm_Room_Bed1.jpg";
import SunriseFarmBedroom2Photo from "@/assets/photos/Day1_SunriseFarm_Room_Bed2.jpg";
import SunriseFarmToiletPhoto from "@/assets/photos/Day1_SunriseFarm_Room_Toilet.jpg";
import SunriseFarmLaundryPhoto from "@/assets/photos/Day1_SunriseFarm_Room_Laundry.jpg";
import SunriseFarmBackyardPhoto from "@/assets/photos/Day1_SunriseFarm_Backyard.jpg";
import SunriseFarmBackyardScenery1Photo from "@/assets/photos/Day1_SunriseFarm_Backyard_Scenery1.jpg";
import SunriseFarmBackyardScenery2Photo from "@/assets/photos/Day1_SunriseFarm_Backyard_Scenery2.jpg";
import SunriseFarmBackyardBilliardPhoto from "@/assets/photos/Day1_SunriseFarm_Backyard_Billiard.jpg";
import SunriseFarmBackyardKaraokePhoto from "@/assets/photos/Day1_SunriseFarm_Backyard_Karaoke.jpg";
import SunriseFarmBusAiChooPhoto from "@/assets/photos/Day1_SunriseFarm_Bus_AiChoo.jpg";
import SunriseFarmBusKokSengPhoto from "@/assets/photos/Day1_SunriseFarm_Bus_KokSeng.jpg";
import SunriseFarmYellowFruitPhoto from "@/assets/photos/Day1_SunriseFarm_Fruit_Yellow.jpg";
import SunriseFarmRedFruitPhoto from "@/assets/photos/Day1_SunriseFarm_Fruit_Red.jpg";
import SunriseFarmHoneyPhoto from "@/assets/photos/Day1_SunriseFarm_Honey.jpg";
import SunriseFarmPuppyPhoto from "@/assets/photos/Day1_SunriseFarm_Puppy.jpg";
import SunriseFarmPuppyVideo from "@/assets/videos/Day1_SunriseFarm_Puppy.mp4";
import SunriseFarmStallPhoto from "@/assets/photos/Day1_SunriseFarm_Stall.jpg";
import SunriseFarmChickenPhoto from "@/assets/photos/Day1_SunriseFarm_Chicken.jpg";
import SunriseFarmPorcupinePhoto from "@/assets/photos/Day1_SunriseFarm_Porcupine.jpg";
import SunriseFarmMonkeyPhoto from "@/assets/photos/Day1_SunriseFarm_Monkey.jpg";
import SunriseFarmGoosePhoto from "@/assets/photos/Day1_SunriseFarm_Goose.jpg";
import SunriseFarmGoslingPhoto from "@/assets/photos/Day1_SunriseFarm_Gosling.jpg";
import SunriseFarmTurkeyPhoto from "@/assets/photos/Day1_SunriseFarm_Turkey.jpg";
import SunriseFarmGuineafowlPhoto from "@/assets/photos/Day1_SunriseFarm_Guineafowl.jpg";
import DinnerPhoto from "@/assets/photos/Day1_Dinner.jpg";

export const Day1Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 1</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          12 December 2025
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
              media: { src: TemplePhoto, alt: "Temple" },
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
              media: { src: TempleWefiePhoto, alt: "Temple Wefie" },
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
              media: { src: TempleBridgePhoto, alt: "Bridge" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: TempleColorsPhoto, alt: "Colors" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: TempleWishingTreePhoto, alt: "Wishing Tree" },
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
              media: { src: TempleWheelPhoto, alt: "Temple Wheel" },
              className: "col-span-8 md:col-span-full",
            },
            {
              type: MediaType.Image,
              media: {
                src: TempleWheelInstructionsPhoto,
                alt: "Temple Wheel Instructions",
              },
              className: "col-span-4 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: TempleWheelAiChooPhoto,
                alt: "Ai Choo with Temple Wheel",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: TempleWheelAiKeePhoto,
                alt: "Ai Kee with Temple Wheel",
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
              media: { src: GardenEntrancePhoto, alt: "Garden Entrance" },
              className: "col-span-4 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: GardenColorsPhoto, alt: "Colors in the Garden" },
              className: "col-span-8 md:col-span-full",
            },
            {
              type: MediaType.Image,
              media: {
                src: GardenFlowerKokSengPhoto,
                alt: "Kok Seng with Garden Flower Statue",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: GardenFlowerSistersPhoto,
                alt: "Sisters with Garden Flower Statue",
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
              media: { src: GardenIceCreamPhoto, alt: "Ice Cream" },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: { src: GardenAiKeePhoto, alt: "Ai Kee with Ice Cream" },
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
              media: {
                src: YongJuanHinMenu1Photo,
                alt: "Yong Juan Hin Menu 1",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: YongJuanHinMenu2Photo,
                alt: "Yong Juan Hin Menu 2",
              },
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
              media: {
                src: YongJuanHinDrinksPhoto,
                alt: "Yong Juan Hin Drinks",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: YongJuanHinFoodPhoto, alt: "Yong Juan Hin Food" },
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
              media: { src: YiPinShaoPhoto, alt: "Yi Pin Shao" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: YiPinShaoInteriorPhoto,
                alt: "Yi Pin Shao Interior",
              },
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
              media: { src: YiPinShaoSoupPhoto, alt: "Yi Pin Shao Soup" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: YiPinShaoFoodPhoto, alt: "Yi Pin Shao Food" },
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
              media: { src: SunriseFarmNamePhoto, alt: "Sunrise Farm Name" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmEntrancePhoto,
                alt: "Sunrise Farm Entrance",
              },
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
              media: {
                src: SunriseFarmReceptionPhoto,
                alt: "Sunrise Farm Reception",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmStagePhoto, alt: "Sunrise Farm Stage" },
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
              media: { src: SunriseFarmSantaPhoto, alt: "Sunrise Farm Santa" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmCarPhoto, alt: "Sunrise Farm Car" },
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
              media: {
                src: SunriseFarmUmbrellaPhoto,
                alt: "Sunrise Farm Umbrella",
              },
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
                src: SunriseFarmWatermelonPhoto,
                alt: "Sunrise Farm Watermelon",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmRabbitPhoto,
                alt: "Sunrise Farm Rabbit",
              },
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
              media: {
                src: SunriseFarmBackyardPhoto,
                alt: "Sunrise Farm Backyard",
              },
              className: "col-span-full md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmBackyardScenery1Photo,
                alt: "Sunrise Farm Backyard Scenery 1",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmBackyardScenery2Photo,
                alt: "Sunrise Farm Backyard Scenery 2",
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
              media: {
                src: SunriseFarmBackyardBilliardPhoto,
                alt: "Sunrise Farm Billiard",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmBackyardKaraokePhoto,
                alt: "Sunrise Farm Karaoke",
              },
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
              media: { src: SunriseFarmMainRoomPhoto, alt: "Living Room" },
              className: "col-span-full md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmBedroom1Photo, alt: "Bedroom 1" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmBedroom2Photo, alt: "Bedroom 2" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmToiletPhoto, alt: "Toilet" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmLaundryPhoto, alt: "Laundry Room" },
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
              media: {
                src: SunriseFarmBusAiChooPhoto,
                alt: "Ai Choo with Sunrise Farm Bus",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmBusKokSengPhoto,
                alt: "Kok Seng with Sunrise Farm Bus",
              },
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
              media: { src: SunriseFarmYellowFruitPhoto, alt: "Yellow Fruit" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmRedFruitPhoto, alt: "Red Fruit" },
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
              media: {
                src: SunriseFarmHoneyPhoto,
                alt: "Sunrise Farm Honey",
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
              media: {
                src: SunriseFarmPuppyPhoto,
                alt: "Sunrise Farm Puppy",
              },
              className: "col-span-6 max-w-md mx-auto",
            },
            {
              type: MediaType.Video,
              media: { src: SunriseFarmPuppyVideo },
              className: "col-span-6 max-w-md mx-auto",
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
              media: { src: SunriseFarmStallPhoto, alt: "Animal Farm Stall" },
              className: "col-span-full",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmChickenPhoto,
                alt: "Animal Farm Chicken",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmGuineafowlPhoto,
                alt: "Animal Farm Guineafowl",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmTurkeyPhoto, alt: "Animal Farm Turkey" },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmMonkeyPhoto, alt: "Animal Farm Monkey" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmPorcupinePhoto,
                alt: "Animal Farm Porcupine",
              },
              className: "col-span-full md:col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: SunriseFarmGoosePhoto, alt: "Animal Farm Geese" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: SunriseFarmGoslingPhoto,
                alt: "Animal Farm Gosling",
              },
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
              media: {
                src: DinnerPhoto,
                alt: "Dinner",
              },
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
      </PageContainer>
    </Page>
  );
};
