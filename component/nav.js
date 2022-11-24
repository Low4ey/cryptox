import Image from 'next/image';
import React from 'react'
import style from "../styles/nav.module.css"

const Nav = () => {
  return (<>
        <div className={style.nav}>
            <Image className={style.img} src="/logo.svg" alt="Hello i am alt" width={100} height={80} /> 
        <ul className={style.list}>
            <li><a>plan Your Trip</a></li>
            <li><a>Book Tours</a></li>
            <li><a>Book Ferry</a></li>
            <li><a>Travel Blog</a></li>
            <li><a>Contact Us</a></li>
            <li>
            <div className={style.search_container}>
  <form action="/search" method="get">
    <input className={[style.search,style.expandright].join(" ")} id="searchright" type="search" name="q" placeholder="Search" />
    <label className={[style.button,style.searchbutton].join(" ")} for="searchright"><span className={style.mglass}>&#9906;</span></label>
  </form>
</div>
  </li>

        </ul>
        </div>
  </>
  )
}

export default Nav;