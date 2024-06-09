import React from 'react' 

export default function ChoseUs() { 
    return ( 
        <section id="choseus" className="my-4 pt-3" > {/* 建立一個 id 為 "choseus" 的 `<section>` 元素，並加入了一些 CSS 類別 */}
            <div className="container"> {/* 建立一個 `<div>` 元素，使用了 Bootstrap 的 CSS 類別 */}
                <div className="row"> {/* 建立一個 `<div>` 元素，使用了 Bootstrap 的 CSS 類別 */}
                    <div className="col-12 text-center my-5"> {/* 建立一個寬度為 12 格的 `<div>` 元素，並水平置中，添加了一些 CSS 類別 */}
                        <h2 className='my-3 fw-bold'>為什麼要選擇我們?</h2> {/* 顯示標題文字，並添加了一些 CSS 類別 */}
                    </div>
                </div>

                <div className="row"> {/* 建立一個 `<div>` 元素，使用了 Bootstrap 的 CSS 類別 */}
                    <div id="modern" className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3"> {/* 建立一個寬度為 3/12 的 `<div>` 元素，並添加了一些 CSS 類別 */}
                        <div className='rounded-circle mb-4'><h1><i className="fa-solid fa-curling-stone"></i></h1></div> {/* 建立一個圓形圖示 */}
                        <h3 className='mb-3'>Modern Equipment</h3> 
                        <p>我們的健身中心配備了最新的運動器材，確保您能夠有效、安全地進行訓練。無論是力量訓練還是有氧運動，我們的設備都能滿足您的需求。</p>
                    </div>
                    <div id="healthy" className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3">
                        <div className='rounded-circle mb-4'><h1><i className="fa-sharp fa-solid fa-glass-citrus"></i></h1></div>
                        <h3 className='mb-3'>Healthy Nutrition Plan</h3>
                        <p>我們提供個性化的營養計劃，幫助您達到最佳的健康和健身效果。專業的營養師將根據您的身體狀況和目標制定合適的飲食方案。</p>

                    </div>
                    <div id="train" className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3">
                        <div className='rounded-circle mb-4'><h1><i className="fa-sharp fa-solid fa-dumbbell"></i></h1></div>
                        <h3 className='mb-3'>Profesional training</h3>
                        <p>我們的教練團隊經驗豐富，擁有多項專業資格認證，能為您提供科學、有效的訓練指導。無論您是健身新手還是資深運動員，我們都能幫助您提升體能。</p>

                    </div>
                    <div id="needs" className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3">
                        <div className='rounded-circle mb-4'><h1><i className="fa-solid fa-heart-pulse"></i></h1></div>
                        <h3 className='mb-3'>Unique to your needs</h3>
                        <p>我們的服務針對個人需求量身定制，確保每位會員都能獲得最適合自己的健身方案。無論您的目標是減肥、增肌還是改善體能，我們都能提供專業支持和指導。</p>

                    </div>
                   
                </div>
            </div>
        </section>
    )
}
