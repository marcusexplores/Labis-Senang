import { NAVIGATION_KEY } from "./constants";

export type NavigationItem = {
  name: string;
  key: string;
} & (
  | {
      type: "page";
      children?: never;
    }
  | {
      type: "category";
      children: NavigationItem[];
    }
);

export const navigationItems: NavigationItem[] = [
  {
    name: "Day1",
    key: NAVIGATION_KEY.ITINERARY_DAY_1,
    type: "page",
  },
  {
    name: "Day2",
    key: NAVIGATION_KEY.ITINERARY_DAY_2,
    type: "page",
  },
  {
    name: "Day3",
    key: NAVIGATION_KEY.ITINERARY_DAY_3,
    type: "page",
  },
];

export const navigationMenuItems: NavigationItem[] = [
  {
    name: "Home",
    key: NAVIGATION_KEY.HOME,
    type: "page",
  },
  ...navigationItems,
];
