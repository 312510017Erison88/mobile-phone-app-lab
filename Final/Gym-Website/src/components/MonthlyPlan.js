import React, { useState } from 'react'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min'; // 從 react-router-dom 中引入 Link 用於路由連結。

export default function MonthlyPlan() { // 定義並導出 MonthlyPlan 組件。

    return ( // 返回組件的 JSX 結構。
        <section id="monthlyplan" className="mb-4 pt-3"> {/* 定義 section 元素，設置 id 和樣式類 */}
            <div className="container"> {/* 使用 Bootstrap 容器來包裝內容 */}
                <div className="row"> {/* 使用 Bootstrap 行來包裝內容 */}
                    <div className="col-12 text-center my-5"> {/* 定義一個列，設置全寬，居中對齊和 margin */}
                        <h2 className='my-3 fw-bold'>私人教練課</h2> {/* 顯示標題，設置 margin 和粗體 */}
                        <h5 className='display-6'>選擇您欲報名的課程與服務</h5> {/* 顯示副標題，設置樣式 */}
                    </div>
                </div>

                <div className="row justify-content-center"> {/* 定義一個行，設置內容居中 */}
                    <div className="col-lg-4 col-md-8"> {/* 定義一個列，設置在不同屏幕大小下的寬度 */}

                        <div className="ps-item text-center mb-4"> {/* 定義一個課程項目，設置居中對齊和 margin */}
                            <h3 className='mb-4'>體驗課程</h3> {/* 顯示課程標題，設置 margin */}
                            <div className="pi-price mb-4"> {/* 定義價格區域，設置 margin */}
                                <h2>799<span class="small-dollar">$</span></h2> {/* 顯示價格，包含貨幣符號 */}
                                <span>SINGLE CLASS</span> {/* 顯示課程類型 */}
                            </div>
                            <ul className="list-group mb-4"> {/* 定義一個無序列表，設置 margin */}
                                <li>一小時教練課程</li> {/* 列出課程細節 */}
                                <li>每人限一次</li> {/* 列出課程細節 */}
                                <li>課程內容會依教練、學生有所不同</li> {/* 列出課程細節 */}
                                <li>體重管理教學</li> {/* 列出課程細節 */}
                                <li>飲食管理教學</li> {/* 列出課程細節 */}
                            </ul>
                            <Link to="/contact" className="btn text-white rounded-0 d-block text-decoration-none">Enroll now</Link> {/* 添加報名按鈕，連結到聯繫頁面 */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8"> {/* 定義另一個列 */}
                        <div className="ps-item text-center mb-4"> {/* 定義另一個課程項目 */}
                            <h3 className='mb-4'>8堂課程</h3> {/* 顯示課程標題 */}
                            <div className="pi-price mb-4"> {/* 定義價格區域 */}
                                <h2>12000<span class="small-dollar">$</span></h2> {/* 顯示價格 */}
                                <span>SINGLE CLASS</span> {/* 顯示課程類型 */}
                            </div>
                            <ul className="list-group mb-4"> {/* 定義一個無序列表 */}
                                <li>一小時教練課程</li> {/* 列出課程細節 */}
                                <li>額外贈送指定時間自主訓練(合約期限內)</li> {/* 列出課程細節 */}
                                <li>可轉讓課程</li> {/* 列出課程細節 */}
                                <li>合約內享補給品75折起</li> {/* 列出課程細節 */}
                                <li>合約內享館內健康餐9折</li> {/* 列出課程細節 */}
                            </ul>
                            <Link to="/contact" className="btn text-white rounded-0 d-block text-decoration-none">Enroll now</Link> {/* 添加報名按鈕 */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8"> {/* 定義第三個列 */}
                        <div className="ps-item text-center mb-4"> {/* 定義第三個課程項目 */}
                            <h3 className='mb-4'>16堂課程</h3> {/* 顯示課程標題 */}
                            <div className="pi-price mb-4"> {/* 定義價格區域 */}
                                <h2>16800<span class="small-dollar">$</span></h2> {/* 顯示價格 */}
                                <span>SINGLE CLASS</span> {/* 顯示課程類型 */}
                            </div>
                            <ul className="list-group mb-4"> {/* 定義一個無序列表 */}
                                <li>一小時教練課程</li> {/* 列出課程細節 */}
                                <li>額外贈送指定時間自主訓練(合約期限內)</li> {/* 列出課程細節 */}
                                <li>可轉讓課程</li> {/* 列出課程細節 */}
                                <li>合約內享補給品7折起</li> {/* 列出課程細節 */}
                                <li>合約內享館內健康餐85折</li> {/* 列出課程細節 */}
                            </ul>
                            <Link to="/contact" className="btn text-white rounded-0 d-block text-decoration-none">Enroll now</Link> {/* 添加報名按鈕 */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
