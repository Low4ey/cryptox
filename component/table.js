import React from 'react'

import style from "../styles/table.module.css"
const Table = (props) => {
  return (<>
        <div className={style.content}>
            <h1>Table Of Content</h1>
            <div className={style.table}>
                <ul className={style.list}>
                   {
                    props.table.map((elem)=>
                        <li ><a>{elem}</a></li>
                    )
                   }
                </ul>
            </div>
        </div>
  </>
  )
}

export default Table

