import React from "react";
import './Register.css'

const Register = () => {
    return (
        <div className="register-form-container">
            <h2>註冊</h2>
            <form className="register-form">
                <div className="form-group">
                <label htmlFor="name">姓名:</label>
                <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                <label htmlFor="birthday">生日:</label>
                <input type="date" id="birthday" name="birthday" required />
                </div>
                <div className="form-group">
                <label htmlFor="username">帳號:</label>
                <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                <label htmlFor="password">密碼:</label>
                <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">提交</button>
            </form>
            </div>
    )
}

export default Register