import React from 'react'
import about from '../assets/image/about.jpg'
import about1 from '../assets/image/about-1.png' 
import about2 from '../assets/image/about-2.png' 

export default function About() { 
    return ( 
        <div id="about" className="container py-5"> {/* 建立一個 id 為 "about" 的 `<div>` 元素，使用了 Bootstrap 的 CSS 類別 */}
            <div className="row align-items-center"> {/* 建立一個包含了水平置中對齊的 `<div>` 元素，使用了 Bootstrap 的 CSS 類別 */}
                <div className="col-lg-6 text-center"> {/* 使用 Bootstrap 的 CSS 類別，將畫面分為兩半，放置圖片，並水平置中 */}
                    <img className="img-fluid mb-4 mb-lg-0" src={about} alt="Image" /> 
                </div>
                <div className="col-lg-6"> {/* 使用 Bootstrap 的 CSS 類別，將畫面分為兩半，放置文字內容 */}
                    <h2 className="display-4 mb-4 text-sm-start text-center">我們擁有豐富經驗</h2> 
                    <p className='text-sm-start text-center'>提供優質健身環境促進人民健康</p> 
                    <div className="about row py-2 text-sm-start text-center"> {/* 建立一個帶有特定 CSS 類別的 `<div>` 元素 */}
                        <div className="col-sm-6"> {/* 將畫面分為兩半，放置圖片和標題文字 */}
                            <img className="img-fluid mb-4 mb-lg-0" src={about1} alt="Image" /> 
                            <h4>經過認證的健身房</h4>
                        </div>
                        <div className="col-sm-6"> {/* 使用 Bootstrap 的 CSS 類別，將畫面分為兩半，放置圖片和標題文字 */}
                            <img className="img-fluid mb-4 mb-lg-0" src={about2} alt="Image" /> 
                            <h4>曾獲獎</h4> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
