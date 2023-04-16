import fetcher from "../utils/fetcher"
import { ImageType } from "../types";
import ImageOfTheDay from "../components/ImageOfTheDay";
import LastTenDaysImages from "../components/LastTenDaysImages";
import Title from "../components/Title";

type HomeProps = {
  imageOfTheDay: ImageType;
  lastTenDaysImages: ImageType[];
}

export default function Home({imageOfTheDay, lastTenDaysImages}: HomeProps ) {

  return (
    <>
      <Title>Nasa Image Project</Title>
      <ImageOfTheDay {...imageOfTheDay}/>
      <LastTenDaysImages images={lastTenDaysImages}/>
    </>
  )
}

export async function getServerSideProps () {
  try {
    const imageOfTheDay = await fetcher()
    const last10DaysImages = await fetcher('&start_date=2023-03-01&end_date=2023-03-10')

    return {
      props: {
        imageOfTheDay,
        last10DaysImages
      }
    }
  } catch (error) {
    console.log(error)
  }
}

