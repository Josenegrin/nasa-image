import { useRouter } from "next/router"
import fetcher from '../../utils/fetcher'
import ImageContainer from "@/src/components/ImageContainer"
import { ImageType } from "@/src/types"
import Title from "@/src/components/Title"
import { GetServerSideProps } from "next"

type ImageDateProps = {
  image: ImageType;
}

type serverSideProps = {
  query: {
    date: string
  };
}

const ImageDate = ({image}: ImageDateProps) => {
  const {explanation, title, url} = image
  const bigSize = true
  const imageProps = {explanation, url, bigSize}

  return (
    <>
      <Title>{`${title}`}</Title>
      <ImageContainer {...imageProps}/>
    </>
  )
}

export default ImageDate

export async function getServerSideProps ({query}: serverSideProps) {

  try {
    const image = await fetcher(`&date=${query.date}`)

    return {
      props: {
        image,
      }
    }
  } catch (error) {
    console.log(error)
  }
}
