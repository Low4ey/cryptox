import React from 'react'
import style from "../styles/side.module.css"
const Side = (props) => {
  return (<>
    <div className={style.main}>
        <h1>{props.head}</h1>
        <ul>
        {
            props.list.map((elem)=>
                <li><a>{elem}</a></li>
            )
        }
        </ul>
    </div>
  </>
  )
}

export default Side