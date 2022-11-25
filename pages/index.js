import style from "../styles/Home.module.css"
import Nav from '../component/nav'
import Ocean from '../component/ocean'
import Side from '../component/side'
import Table from '../component/table'
import {content} from "../json/table"
import {list} from "../json/side"
import Info from "../component/info"
import {info} from "../json/main"
import Faq from "../component/faq"

console.log(list.l1);
export default function Home() {
  return (<>
   <Nav />
   <Ocean />
   <div className={style.main}>
    <div>
   <Table table={content}/>
    {info.map((elem)=><Info head={elem.head} para={elem.content} />) }
   </div>
   <div className={style.side}>
    <Side head="Popular Tourist's Island" list={list.l1} />
    <Side head="About Andman Island" list={list.l2} />
    <Side head="Popular Places to Visit" list={list.l3} />
   </div>
   </div>
   <Faq />
   </>
  )
}
