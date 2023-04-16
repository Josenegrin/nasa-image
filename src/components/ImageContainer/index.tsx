import { ImageType } from '@/src/types'
import style from './ImageContariner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ImageContainer = ({url, title, date, explanation, bigSize}: ImageType) => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={`${style.container_img} ${bigSize ? style.container_img_big_size : ''}`}>
        <Image
          className={`${style.container_img_image} ${date ? style.container_img_image_event : ''}`}
          src={`${url}`}
          alt={title || ''}
          fill
          onClick={ () => router.push(`/image/${date}`)}
          />
      </div>
      {title && <h2>{title}</h2>}
      {explanation && <p>{explanation}</p>}
    </div>
  )
}

export default ImageContainer