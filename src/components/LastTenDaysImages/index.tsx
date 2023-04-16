import { ImageType } from "@/src/types"
import ImageContainer from "../ImageContainer";

type LastTenDaysImageProps = {
  images: ImageType[];
}

const LastTenDaysImages = ({images}: LastTenDaysImageProps) => {
  return (
    <div>
      <h2>Últimos 10 días</h2>
      {images?.map((image) => (
      <ImageContainer
        {...image}
        key={`last-10-day-image-${image?.title}`}/>)
        )}
    </div>
  )
}

export default LastTenDaysImages