import React , { useState }from 'react'

export default function Subscribe() {
    {/*利用陣列的結構賦值取得state內容(email),和更改state內容的函數(Email),並提供了一個初始值為空字串*/}
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');


    {/*增加跳出通知訊息,以及email若沒輸入@完整會報錯*/}
    const handleSubscribe = (event) => {
        event.preventDefault();{/*此行程式碼呼叫了事件物件的 preventDefault() 方法，阻止了表單的預設提交行為，即防止網頁重新載入。*/}
        if (!email.includes('@')) {
            setError('');{/*如果電子郵件地址格式不正確，這行程式碼將清空錯誤狀態。*/}
            alert(` Please enter an account containing @`);{/*如果電子郵件地址格式不正確，這行程式碼將彈出一個警告視窗，提醒用戶輸入完整資訊*/}
        } else {
            setError('');
            alert('Thank you for your subscription！');
        }
    };
    return (
        // 包含訂閱部分的外部容器，使用 Bootstrap 類來設置容器的樣式
        <div className="subscribe container-fluid my-5 text-center">  {/*訂閱部分的外部容器，設置了上下外邊距和文本居中*/}
            <div className="row">  {/*設置行樣式*/} 
                <div className="col-12">  {/*設置列樣式，使列占滿整行*/}
                    <h4 className="display-4 text-white mb-3">Subscribe Our Newsletter</h4>  {/*設置標題樣式，使用白色字體和底部外邊距*/}
                    <p className="text-white mb-4">Subscribe and get Our latest article in your inbox</p>  {/*設置描述文本樣式，使用白色字體和底部外邊距*/}
    
                    <form onSubmit={handleSubscribe} className="input-group justify-content-center">  {/*訂閱表單，當表單提交時，調用 handleSubscribe 函數使用 Bootstrap 類設置表單樣式，設置輸入組和居中對齊*/}
                        <input 
                            type="text"  // 設置輸入類型為文本
                            className="form-control-lg mb-sm-0 mb-4 rounded-0"  // 使用 Bootstrap 類設置輸入框樣式，包括大尺寸、底部外邊距和無圓角
                            placeholder="Your Email"  // 設置佔位符文本
                            value={email}  // 設置輸入框的值為 email 狀態
                            onChange={(e) => setEmail(e.target.value)}  // 當輸入值改變時，更新 email 狀態
                        />
                        <div className="input-group-append">  {/*包含訂閱按鈕的容器，使用 Bootstrap 類設置輸入組追加項樣式*/}
                            <button className="btn text-white" type="submit">Subscribe</button> {/*訂閱按鈕，使用 Bootstrap 類設置按鈕樣式，包括白色文字，設置按鈕類型為提交*/}
                        </div>
                    </form>
                    {error && <p className="text-danger mt-2">{error}</p>} {/*如果存在錯誤消息，則顯示錯誤消息。使用 Bootstrap 類設置錯誤消息樣式，包括紅色文字和頂部外邊距*/}
                </div>
            </div>
        </div>
    )
    
}
