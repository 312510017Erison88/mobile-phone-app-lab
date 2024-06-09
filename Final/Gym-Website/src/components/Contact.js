import React, { useState } from 'react';

export default function Contact() {
    {/*利用陣列的結構賦值取得state內容(name),和更改state內容的函數(setName),並提供了一個初始值為空字串*/}
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    {/*增加跳出通知訊息,以及email若沒輸入完整會報錯*/}
    const handleSubmit = (event) => {
        event.preventDefault();{/*此行程式碼呼叫了事件物件的 preventDefault() 方法，阻止了表單的預設提交行為，即防止網頁重新載入。*/}
        if (!email.includes('@')) {
            setError('');{/*如果電子郵件地址格式不正確，這行程式碼將清空錯誤狀態。*/}
            alert(`${name} Please enter complete information`);{/*如果電子郵件地址格式不正確，這行程式碼將彈出一個警告視窗，提醒用戶輸入完整資訊*/}
        } else {
            setError('');{/*在這個程式碼塊中，先清空錯誤狀態。*/}
            alert(`${name} Hello, we have received your message ~ Thank You`);
        }
    };
    return ( 
        <div id="contact" className='container'> {/* 建立一個 id 為 "contact" 的 <div> 元素，並使用 Bootstrap 的 container 類別 */}
            <div className="row"> {/* 建立一個 Bootstrap row，作為行容器 */}
                <div className="col-md-6 mb-md-0 mb-5"> {/* 建立一個 Bootstrap 列，寬度為中等裝置的 6 格，底部外距在中等裝置和小於中等裝置時不同 */}
                    <div> 
                        <h4>CONTACT US</h4> 
                        <h2 className='display-5 mb-4'>GET IN TOUCH</h2> {/* 使用 Bootstrap 的 display-5 類別和底部外距 */}
                    </div>
                    <div className='contact-info d-flex flex-column'> {/* 建立一個 contact-info <div>，使用 Flexbox 設置為垂直排列 */}
                        <div className='d-flex align-items-center mb-3'> {/* 建立一個 Flexbox 容器，垂直對齊內容，並設置底部外距 */}
                            <div className='bg-primary rounded-circle d-flex align-items-center justify-content-center me-3'> {/* 建立一個背景為藍色，圓形，垂直居中和水平居中的 Flexbox 容器，並設置右外距 */}
                                <i className="fa fa-map-marker-alt"></i> {/* 插入 Font Awesome 的地圖標記圖標 */}
                            </div>
                            <div> 
                                <p className='m-0'>新竹市東區大學路1001號</p> {/* 顯示地址資訊，無外距 */}
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'> {/* 類似於上面，這是第二個聯絡資訊項目 */}
                            <div className='bg-primary rounded-circle d-flex align-items-center justify-content-center me-3'>
                                <i className="fa fa-phone"></i> {/* 插入 Font Awesome 的電話圖標 */}
                            </div>
                            <div>
                                <p className='m-0'>0912345678</p> {/*無外距 */}
                            </div>
                        </div>
                        <div className='d-flex align-items-center'> {/* 類似於上面，這是第三個聯絡資訊項目 */}
                            <div className='bg-primary rounded-circle d-flex align-items-center justify-content-center me-3'>
                                <i className="fa fa-envelope"></i> {/* 插入 Font Awesome 的電子郵件圖標 */}
                            </div>
                            <div>
                                <p className='m-0'>S0853000.ee12@nycu.edu.tw</p> {/* 顯示電子郵件地址，無外距 */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6"> {/* 建立一個 Bootstrap 列，寬度為中等裝置的 6 格 */}
                    <form onSubmit={handleSubmit}> {/* 表單元素，提交事件觸發 handleSubmit 函式 */}
                        <div className="mb-3 mt-3"> {/* 建立一個 <div> 容器，設置上下外距 */}
                            <input
                                type="text"
                                className="form-control rounded-0" // Bootstrap 類別，設置輸入框樣式
                                placeholder="Name" // 提示用戶輸入名稱
                                name="name" // 設置輸入框名稱為 "name"
                                value={name} // 設置輸入框的值為 name 狀態變數
                                onChange={(e) => setName(e.target.value)} // 當輸入框的值改變時，更新 name 狀態變數
                            />
                        </div>
                        <div className="mb-3"> {/* 設置底部外距 */}
                            <input
                                type="email"
                                className="form-control rounded-0" // Bootstrap 類別，設置輸入框樣式
                                placeholder="Email" // 提示用戶輸入電子郵件地址
                                name="email" // 設置輸入框名稱為 "email"
                                value={email} // 設置輸入框的值為 email 狀態變數
                                onChange={(e) => setEmail(e.target.value)} // 當輸入框的值改變時，更新 email 狀態變數
                            />
                            {error && <p className="text-danger">{error}</p>} {/* 如果 error 狀態變數不為空，顯示錯誤訊息*/}
                        </div>
                        <div className="mb-3">{/*設置底部外距 */}
                            <textarea
                                className="form-control rounded-0" // Bootstrap 類別，設置文字區域樣式
                                rows="5" // 設置文字區域的行數為 5
                                id="comment" // 設置文字區域的 id 為 "comment"
                                name="text" // 設置文字區域名稱為 "text"
                                placeholder="Comment" // 提示用戶輸入評論
                            ></textarea>
                        </div>
                        <div className='d-grid'> {/* 建立一個 <div> 容器，設置為網格布局 */}
                            <button type="submit" className="btn btn-block rounded-0">Submit</button> {/* 提交按鈕，設置類別為 btn btn-block 和圓角 */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}