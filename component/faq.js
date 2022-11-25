import React from 'react'
import style from "../styles/faq.module.css"

const Faq = () => {
  return (<>
  <section className={style.faq_section}>
<div className={style.container}>
  <div className={style.row}>
                    <div className={[style.col_md_6,style.offset_md_3].join(" ")}>

                        <div className={[style.faq_title,style.text_center,style.pb_3].join(" ")}>
                            <h2>FAQ</h2>
                        </div>
                    </div>
                    <div className={[style.col_md_6,style.offset_md_3].join(" ")}>
                        <div className={style.faq} id="accordion">
                            <div className={style.card}>
                                <div className={style.card_header} id="faqHeading-1">
                                    <div className={style.mb_0}>
                                        <h5 className={style.faq_title} data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                            <span className={style.badge}>1</span>What is Lorem Ipsum?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                    <div className={style.card_body}>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>
  </>
  )
}

export default Faq