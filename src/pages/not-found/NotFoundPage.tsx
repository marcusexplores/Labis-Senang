import { Link } from "react-router";
import { Page } from "@/components/page/Page";
import { Button } from "@/components/button/Button";
import { NAVIGATION_KEY } from "@/components/navigation/constants";

export const NotFoundPage = () => {
  return (
    <Page hideTopPadding className="h-screen bg-background bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-col items-center p-4 w-full max-w-7xl lg:flex-row lg:items-stretch lg:justify-between">
        <div className="flex flex-col items-center justify-center my-8 lg:my-0 lg:order-2 lg:flex-1">
          <h1 className="text-9xl lg:text-[15rem] font-extrabold text-primary [text-shadow:4px_4px_6px_rgba(0,0,0,0.25)]">
            404
          </h1>
          <div className="text-center font-bold text-lg sm:text-lg lg:text-2xl my-5">
            Not Found
          </div>
          <Button asChild className="mt-6 inline-block text-center rounded-full">
            <Link to={NAVIGATION_KEY.HOME}>
              Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </Page>
  );
};
