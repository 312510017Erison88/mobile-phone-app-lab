import './Login.css'
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); //初始為false
    const history = useHistory(); //useHistory 是一個 Hook，會自動從 React Router 的上下文中獲取並返回 history 對象。

    const handleSubmit = (e) => {
        e.preventDefault(); // 阻止了表單的默認提交行為，防止頁面刷新
        setIsSubmitted(true);
        alert("登入成功");
    };

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => { // 設置計時器
                history.push('/'); // 移動
            }, 1000);
            return () => clearTimeout(timer); //清除計時器
        }
    }, [isSubmitted, history]); //當 isSubmitted 或 history 變化時，才重新運行 useEffect 內的函數。

    return (
        <div className="login-form">
            <h2>登入</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">帳號:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">密碼:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">登入</button>
            </form>
            <div className="links">
                <Link to="/register">註冊</Link>
                <a href="/forgot-password">忘記密碼</a>
            </div>
        </div>
    );
};

export default Login;
