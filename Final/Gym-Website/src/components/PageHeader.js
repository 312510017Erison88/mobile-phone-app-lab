import React from 'react'
import PropTypes from 'prop-types'
// PropTypes：用於進行屬性類型檢查，確保傳遞給元件的屬性具有正確的類型

// PageHeader 組件的功能是生成一個頁面標頭，標頭包含一個標題和一個導航路徑。
// 用於網站的不同頁面之間切換，因為它提供了上下文並告訴用戶當前所在的位置
// PageHeader 是一個函式組件，它接受 props 作為參數
// props 包含了傳遞給這個元件的所有屬性
export default function PageHeader(props) {

  const myStyle = {
    minHeight: '400px'
  };

  return (
    <div className="container-fluid page-header mb-5">
      <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={myStyle}>
        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">{props.title}</h4>
        <div className="d-inline-flex">
          <p className="m-0 text-white">Home</p>
          <p className="m-0 text-white px-2">/</p>
          <p className="m-0 text-white">{props.title}</p>
        </div>
      </div>
    </div>
  )
 }

// propTypes 屬性用於定義 PageHeader 組件接受的 props 的類型
// title attributes are defined to be string , this means the value you sent in to PageHeaders' title,
//  need to be a string
PageHeader.propTypes = {
  title: PropTypes.string,
};