import { Route, Routes } from "react-router";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";
import { HomePage } from "@/pages/home/HomePage";
import { Day1Page } from "@/pages/itinerary/Day1Page";
import { Day2Page } from "@/pages/itinerary/Day2Page";
import { Day3Page } from "@/pages/itinerary/Day3Page";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { NAVIGATION_KEY } from "@/components/navigation/constants";

export default function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={NAVIGATION_KEY.ITINERARY_DAY_1} element={<Day1Page />} />
          <Route path={NAVIGATION_KEY.ITINERARY_DAY_2} element={<Day2Page />} />
          <Route path={NAVIGATION_KEY.ITINERARY_DAY_3} element={<Day3Page />} />
          <Route path={NAVIGATION_KEY.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}
