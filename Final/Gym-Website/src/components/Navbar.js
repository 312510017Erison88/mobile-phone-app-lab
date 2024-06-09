import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const blueStyle = {
    color: 'blue',
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navBar" className="position-absolute">
      <nav className="navbar bg-dark-lg navbar-expand-lg"> {/* bg-dark-lg: 深色背景, navbar-expand-lg: 在大屏幕上展開 */}
        <div className="container-fluid"> {/* container-fluid: 滿寬容器 */}
          <Link id="gym" to="/" className="navbar-brand mx-lg-5 mx-4 mt-1"> {/* navbar-brand: 品牌樣式, mx-lg-5: 大屏幕時水平外間隔, mx-4: 默認水平外間隔, mt-1: 頂部外間隔 */}
            <h1 className="m-0 display-2 font-weight-bold text-uppercase text-white"> {/* m-0: 無外間隔, display-2: 大標題樣式, font-weight-bold: 粗體字, text-uppercase: 大寫字母, text-white: 白色文字 */}
              gy<span style={blueStyle}>m</span>
            </h1>
          </Link>

          <div className="menu me-3"> {/* me-3: 水平外間隔 */}
            <button
              type="button"
              onClick={toggleMenu}
              className="navbar-toggler" // navbar-toggler: 漢堡菜單按鈕樣式
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span>
                <i className="fa-regular fa-bars"></i> {/* fa-bars: FontAwesome 的漢堡菜單圖標 */}
              </span>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent"> {/* collapse: 可折疊, navbar-collapse: 導航欄折疊樣式, show: 顯示折疊內容 */}
            <ul className="navbar-nav ms-lg-5 me-auto mb-2 mb-lg-0 text-uppercase"> {/* navbar-nav: 導航項目樣式, ms-lg-5: 大屏幕時左側外間隔, me-auto: 自動右側外間隔, mb-2: 底部外間隔, mb-lg-0: 大屏幕時無底部外間隔, text-uppercase: 大寫字母 */}
              <li className="nav-item"> {/* nav-item: 導航項目樣式 */}
                <NavLink className="nav-link home" activeClassName="active" exact to="/"> {/* nav-link: 導航鏈接樣式, activeClassName: 當前頁面的活動樣式 */}
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/features">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  Contact
                </NavLink>
              </li>
              
              {/* 以下加了兩個dropdown */}
              <li className="nav-item dropdown"> {/* dropdown: 下拉菜單樣式 */}
                <a
                  className="nav-link dropdown-toggle" // dropdown-toggle: 下拉菜單切換樣式
                  href="#"
                  id="serviceDropdown"
                  role="button"
                  data-toggle="dropdown" // data-toggle: 下拉菜單觸發
                  aria-haspopup="true" // aria-haspopup: 無障礙屬性，表明此元素有下拉菜單
                  aria-expanded="false" // aria-expanded: 無障礙屬性，表明下拉菜單的狀態
                >
                  Service
                </a>
                <div className="dropdown-menu" aria-labelledby="serviceDropdown"> {/* dropdown-menu: 下拉菜單內容樣式 */}
                  <NavLink className="dropdown-item" activeClassName="active" to="/bmi"> {/* dropdown-item: 下拉項目樣式 */}
                    BMI
                  </NavLink>
                  {/* 加了ticket dropdown */}
                  <NavLink className="dropdown-item" activeClassName="active" to="/ticket">
                    Ticket
                  </NavLink>
                  <NavLink className="dropdown-item" activeClassName="active" to="/question">
                    Question
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="bookingDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Reserve
                </a>
                <div className="dropdown-menu" aria-labelledby="bookingDropdown">
                  <NavLink className="dropdown-item" activeClassName="active" to="/usercount">
                    UserCount
                  </NavLink>
                  <NavLink className="dropdown-item" activeClassName="active" to="/venue">
                    Venue reservation
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
