import Image from 'next/image';
import React from 'react'
import { useState } from 'react'
import style from "../styles/nav.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Nav = () => {

  const [isMobile, setMobile] = useState(false);
  return (<>
    <div className={style.nav}><button className={style.btn}>{isMobile ? (
      <FontAwesomeIcon onClick={() => setMobile(!isMobile)} icon={faTimes} className="fas fa-2xl fa-times" style={{ color: "black" }}
      ></FontAwesomeIcon>) :
      (<FontAwesomeIcon onClick={() => setMobile(!isMobile)} icon={faBars} className="fas fa-2xl fa-bars" style={{ color: "black" }}
      ></FontAwesomeIcon>)
    }</button>
      <Image className={style.img} src="/logo.svg" alt="Hello i am alt" width={100} height={80} />
      <ul className={isMobile ? style.list_mob : style.list}>
        <li><Link href="https://www.youtube.com" target="_blank">plan Your Trip</Link></li>
        <li><Link href="https://www.youtube.com" target="_blank">Book Tours</Link></li>
        <li><Link href="https://www.youtube.com" target="_blank">Book Ferry</Link></li>
        <li><Link href="https://www.youtube.com" target="_blank">Travel Blog</Link></li>
        <li><Link href="https://www.youtube.com" target="_blank">Contact Us</Link></li>
        <li><Link href="https://www.youtube.com" target="_blank">
          <div className={style.search_container}>
            <form action="/search" method="get">
              <input className={[style.search, style.expandright].join(" ")} id="searchright" type="search" name="q" placeholder="Search" />
              <label className={[style.button, style.searchbutton].join(" ")} for="searchright"><span className={style.mglass}>&#9906;</span></label>
            </form>
          </div>
        </Link>
        </li>

      </ul>
      <Image className={style.logo} src="/travel.png" alt="logo" width={60} height={60} />
    </div>
  </>
  )
}

export default Nav;