import React, { useState } from "react";
export default function BMI() {
  const [myStyle, setMyStyle] = useState(""); //初始化
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const WeightVal = (event) => {
    //觸發函數的事件
    setWeight(event.target.value); //指向輸入框 -> 輸入框的值 //更新狀態變量
  };

  const HeightVal = (event) => {
    setHeight(event.target.value);
  };

  const calculateBmi = () => {
    if (weight && height) {
      const bmi = (weight / (height / 100) ** 2).toFixed(2);

      setMyStyle(bmi);
    } else {
      setMyStyle("Please enter valid weight and height.");
    }
  };

  return (
    <div className="container-fluid-lg position-relative bmi my-5">
      <div className="container-lg">
        <div className="row px-lg-3 align-items-center mt-5">
          <div className="col-md-6">
            {/* 左側說明區塊 */}
            <div className="pe-md-3 d-none d-md-block">
              <h4 className="text-primary">身體質量指數</h4>
              <h4 className="display-4 text-white fw-bold mb-4">什麼是 BMI?</h4>
              <p className="m-0 text-white">
                BMI的定義是體重除以身高的平方，由於BMI沒有將體脂肪率計算在內，所以一個BMI超重的人，不一定是肥胖
              </p>
            </div>
          </div>
          <div className="col-md-6 bg-secondary py-5">
            {/* 右側計算器區塊 */}
            <div className="py-md-5 px-3">
              <h1 className="mb-4 text-white text-center text-md-start">
                Calculate Your BMI
              </h1>
              <form>
                <div className="row">
                  <div className="col-sm mb-sm-0 mb-4">
                    {/* 體重輸入框 */}
                    <input
                      type="text"
                      className="form-control bg-dark text-white rounded-0" // form-control: Bootstrap 的表單控制樣式, bg-dark: 深色背景, text-white: 白色文字, rounded-0: 無圓角
                      value={weight} // 綁定狀態變量 weight，使得輸入框的值始終與 weight 狀態保持同步
                      onChange={WeightVal} // 當輸入框的值改變時會觸發 WeightVal 函數
                      placeholder="Weight (KG)" // 預設顯示提示
                    />
                  </div>
                  <div className="col">
                    {/* 身高輸入框 */}
                    <input
                      type="text"
                      className="form-control bg-dark text-white rounded-0" // form-control: Bootstrap 的表單控制樣式, bg-dark: 深色背景, text-white: 白色文字, rounded-0: 無圓角
                      value={height} // 綁定狀態變量 height，使得輸入框的值始終與 height 狀態保持同步
                      onChange={HeightVal} // 當輸入框的值改變時會觸發 HeightVal 函數
                      placeholder="Height (CM)" // 預設顯示提示
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col btn-wrap">
                    {/* 計算按鈕 */}
                    <input
                      type="button"
                      onClick={calculateBmi} // 當按鈕被點擊時會觸發 calculateBmi 函數
                      className="form-control bg-dark text-white rounded-0" // form-control: Bootstrap 的表單控制樣式, bg-dark: 深色背景, text-white: 白色文字, rounded-0: 無圓角
                      value="Calculate Now" // 按鈕上的文字
                    />
                  </div>
                  <div className="col">
                    {/* BMI 顯示框 */}
                    <input
                      type="text"
                      className="form-control bg-dark text-white rounded-0" // form-control: Bootstrap 的表單控制樣式, bg-dark: 深色背景, text-white: 白色文字, rounded-0: 無圓角
                      value={myStyle} // 綁定狀態變量 myStyle，使得輸入框的值始終與 myStyle 狀態保持同步
                      placeholder="BMI" // 預設顯示提示
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
