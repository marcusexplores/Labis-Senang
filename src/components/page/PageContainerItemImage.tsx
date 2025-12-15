import { Quilt } from "@/components/quilt/Quilt";
import type { QuiltTile } from "@/components/quilt/types";
import { PageContainerItem } from "./PageContainerItem";
import { mediaContainerVariant } from "./constants";

interface PageContainerItemImageProps {
  variant: string;
  data?: Image | QuiltTile[];
  caption?: string;
}

const getMediaContainer = (
  variant: string,
  data?: Image | QuiltTile[]
) => {
  if (variant === mediaContainerVariant.Image) {
    const input = data as Image;
    return (
      <div>
        <img src={input.src} alt={input.alt} />
      </div>
    );
  } else if (variant === mediaContainerVariant.Quilt) {
    const input = data as QuiltTile[];
    return <Quilt data={input} />;
  } else {
    throw new Error("An error occurred while creating media container.");
  }
};

export const PageContainerItemImage = ({
  variant,
  data,
  caption,
}: PageContainerItemImageProps) => {
  return (
    <PageContainerItem>
      {getMediaContainer(variant, data)}
      {caption && <div>{caption}</div>}
    </PageContainerItem>
  );
};
