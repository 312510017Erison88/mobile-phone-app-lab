import React from 'react'; 

export default function Services() { 

    return ( 
        <div id="services" className='container pb-4'> {/* 定義一個包含所有內容的 div，設置 id 和樣式 */}
            <div className="row align-items-center"> {/* 使用 Bootstrap 的行來包裝內容，設置垂直居中對齊 */}
                <div className="col-md-6 mb-md-0 mb-4"> {/* 定義一個列，設置在中等屏幕和更大屏幕上的寬度，以及 margin */}
                    <div className="d-flex align-items-center justify-content-center about-video set-bg"> {/* 使用 Flexbox 來居中對齊內容，並設置背景 */}
                        <a href="https://www.youtube.com/watch?v=A-UV7Z13uAQ" className="play-btn video-popup"> {/* 添加一個鏈接，用於打開 YouTube 視頻，並設置樣式 */}
                            <i className="fa fa-caret-right"></i> {/* 使用 Font Awesome 圖標來表示播放按鈕 */}
                        </a>
                    </div>
                </div>

                <div className="col-md-6 text-sm-start text-center"> {/* 定義另一個列，設置在中等屏幕和更大屏幕上左對齊文本，小屏幕上居中對齊 */}
                    <h4>Features</h4> {/* 顯示副標題 */}
                    <h2 className='text-uppercase mb-4'>飲食與健康息息相關</h2> {/* 顯示主要標題，設置大寫和 margin */}
                    <p className='mb-4'>首先，健康的飲食習慣有助於維持理想的體重和體態。通過選擇均衡的食物，避免攝入過多的高熱量食品，我們可以控制體重，減少肥胖和相關的健康問題風險，如心血管疾病、糖尿病等。</p> {/* 顯示第一段文本，設置 margin */}
                    <p className='mb-4'>其次，良好的飲食習慣有助於提高免疫力和身體抵抗力。攝入豐富的維生素、礦物質和抗氧化劑，可以增強免疫系統，幫助身體對抗疾病和感染，減少生病的機會，保持健康狀態。</p> {/* 顯示第二段文本，設置 margin */}
                    <p className='mb-4'>此外，適當的飲食還能提供足夠的能量和燃料，支持我們的日常活動和運動訓練。選擇高質量的蛋白質來源，如瘦肉、豆類、蛋類等，有助於肌肉修復和生長，提高體力和耐力。</p> {/* 顯示第三段文本，設置 margin */}
                    <p className='mb-4'>最後，健康的飲食習慣與心理健康密切相關。營養豐富的食物可以影響大腦功能和情緒穩定性，有助於提升情緒和心理狀態，減輕壓力和焦慮，促進整體幸福感和生活品質。</p> {/* 顯示第四段文本，設置 margin */}

                    <div className='about-bar'> {/* 定義一個包含進度條的區域 */}
                        <div className='body-building mb-4'> {/* 定義進度條項目，設置 margin */}
                            <div className='d-flex align-items-center justify-content-between'> {/* 使用 Flexbox 來水平排列內容，並設置垂直居中 */}
                                <p>碳水化合物</p> 
                                <p>45%</p> 
                            </div>
                            <div className="progress"> {/* 定義進度條容器 */}
                                <div className="progress-bar"></div> 
                            </div>
                        </div>

                        <div className='training mb-4'> {/* 定義第二個進度條項目 */}
                            <div className='d-flex align-items-center justify-content-between'> {/* 使用 Flexbox 來水平排列內容 */}
                                <p>蛋白質</p> 
                                <p>30%</p> 
                            </div>
                            <div className="progress"> {/* 定義進度條容器 */}
                                <div className="progress-bar"></div> {/* 定義進度條 */}
                            </div>
                        </div>

                        <div className='fitness'> {/* 定義第三個進度條項目 */}
                            <div className='d-flex align-items-center justify-content-between'> {/* 使用 Flexbox 來水平排列內容 */}
                                <p>脂肪</p> 
                                <p>15%</p> 
                            </div>
                            <div className="progress"> {/* 定義進度條容器 */}
                                <div className="progress-bar"></div> {/* 定義進度條 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
