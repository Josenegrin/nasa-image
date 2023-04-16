import React, { Children } from 'react'
import style from './Title.module.css'

type TitleProps = {
  children: string;
}
const Title = ({children}: TitleProps) => {
  return (
    <h1 className={style.title}>{children}</h1>
  )
}

export default Title