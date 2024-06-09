import gym1 from '../assets/image/gym-1.jpg';
import gym2 from '../assets/image/gym-2.jpg';
import React from 'react';

export default function Banner() {
    return (
        // Top container
        <div id="slider">  
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">{/* 告訴 Bootstrap 在頁面加載時自動開始輪播 */}
                {/* inner container */}
                <div className="carousel-inner">
                    {/* 第一個輪播項目設置為 active，表示它是初始顯示的項目 */}
                    <div className="carousel-item active">
                        <img src={gym1} className="w-100" alt="..." />
                        {/* 用於顯示圖片上的標題 */}
                        <div className="carousel-caption">
                            <h1 className='title'>運動中心</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={gym2} className="w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className='title'>運動中心</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    {/* 左箭頭 */}
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    {/* 右箭頭 */}
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
}
