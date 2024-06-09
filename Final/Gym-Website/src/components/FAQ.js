// FAQ.js
import React from 'react'; 
import './FAQ.css';  

export default function FAQ() { 
  return (
    <div className="faq container my-5"> {/* 建立一個 class 為 'faq container my-5' 的 div 元素，用於包裹整個 FAQ 組件 */}
      <h2 className="mb-4">常見問題</h2> {/* FAQ 標題，class 設置為 'mb-4'，表示底部外距 */}
      <div className="accordion" id="faqAccordion"> {/* 建立一個 class 為 'accordion' 並且 id 為 'faqAccordion' 的 div 元素，用於包裹手風琴效果的內容 */}
        {[
          // FAQ 資料陣列，每個項目包含 id、問題 (question) 和答案 (answer)
          { id: 1, question: "請問付款方式有提供哪些？", answer: "目前只提供信用卡及現金付款。" },
          { id: 2, question: "請問你們場館地點位在哪邊？", answer: "我們的健身房位於工程四館ED314。" },
          { id: 3, question: "請問是否提供停車場？", answer: "有的 , 我們的停車場位於本館B1及B2 , 會員可免費停車。" },
          { id: 4, question: "請問健身房對於穿著有什麼規定嗎？", answer: "運動時需穿著運動服裝和運動鞋，嚴禁赤腳或穿著黑膠底鞋、皮鞋、高跟鞋、涼鞋、拖鞋等進入活動區域。" },
          { id: 5, question: "請問是否有客服可以聯繫？", answer: "您可以至Contact Us處,填寫表單將您的意見回饋給我們。" },
        ].map(item => ( // 使用 map 函式遍歷 FAQ 資料陣列，為每個項目生成對應的FAQ項目
          <div className="accordion-item" key={item.id}> {/* 每個FAQ項目使用 class 'accordion-item' 並且設置唯一 key */}
            <h2 className="accordion-header" id={`heading${item.id}`}> {/* FAQ項目的標題，設置唯一 id */}
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false" aria-controls={`collapse${item.id}`}>
                {/* FAQ的按鈕，設置 class 'accordion-button collapsed'，type 設置為 'button'，Bootstrap 的 data 屬性用於控制FAQ效果 */}
                {item.question} {/* 顯示 FAQ 的問題 */}
              </button>
            </h2>
            <div id={`collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${item.id}`} data-bs-parent="#faqAccordion">
              {/* FAQ項目的內容區域，設置唯一 id，class 設置為 'accordion-collapse collapse'，並且設置 aria 屬性以符合無障礙規範 */}
              <div className="accordion-body">
                {item.answer} {/* 顯示 FAQ 的答案 */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
