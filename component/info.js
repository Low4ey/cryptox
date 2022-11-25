import React from 'react'
import style from "../styles/info.module.css"
import Image from 'next/image';

const Info = (props) => {
  return (<>
    <div className={style.main}>
  <h1 className={style.head}>{props.head}</h1>
  <div className={style.box}>
    <p>
    {props.para}
    </p>
  </div>
  <Image className={style.img} src="/divider.png" alt="alt" width={1000} height={13}/>

  </div>
  
  </>
  )
}

export default Info