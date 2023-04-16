import { ImageType } from "@/src/types"
import ImageContainer from "../ImageContainer"

const ImageOfTheDay = ({url, title, date}: ImageType) => {
  const bigSize = true
  const image = {url, title, date, bigSize}

  return ( <ImageContainer {...image}/>)
}

export default ImageOfTheDay