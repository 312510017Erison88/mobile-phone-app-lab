import React, { useState } from 'react';
import './usercount.css';

function UserCount() {
  // 定義一個名為 UserCount 的函數組件
  // 定義狀態變量及其更新函數，初始值為 0
  const [dumbbellCount, setDumbbellCount] = useState(0);
  const [benchPressCount, setBenchPressCount] = useState(0);
  const [treadmillCount, setTreadmillCount] = useState(0);
  const maxCount = 10;// 定義最大計數，設為常量值 10
  // 定義狀態變量及其更新函數，用於存儲提示訊息，初始值為空字符串
  const [dumbbellMessage, setDumbbellMessage] = useState('');
  const [benchPressMessage, setBenchPressMessage] = useState('');
  const [treadmillMessage, setTreadmillMessage] = useState('');
  // 定義狀態變量及其更新函數，用於存儲等待時間，初始值為 0
  const [dumbbellWaitTime, setDumbbellWaitTime] = useState(0);
  const [benchPressWaitTime, setBenchPressWaitTime] = useState(0);
  const [treadmillWaitTime, setTreadmillWaitTime] = useState(0);

  //增加 dumbbellCount 的值
  const incrementDumbbell = () => {
    if (dumbbellCount < maxCount) {
      setDumbbellCount(dumbbellCount + 1);
      setDumbbellMessage('');// 清空 dumbbellMessage 的值
      setDumbbellWaitTime((dumbbellCount + 1) * 5); // 假設每增加一人，等待時間增加5分鐘
    } else {
      setDumbbellMessage('人數已滿無法預約');
    }
  };

  const decrementDumbbell = () => {
    if (dumbbellCount > 0) {
      setDumbbellCount(dumbbellCount - 1);
      setDumbbellMessage('');
      setDumbbellWaitTime((dumbbellCount - 1) * 5); // 假設每減少一人，等待時間減少5分鐘
    }
  };

  const incrementBenchPress = () => {
    if (benchPressCount < maxCount) {
      setBenchPressCount(benchPressCount + 1);
      setBenchPressMessage('');
      setBenchPressWaitTime((benchPressCount + 1) * 5); // 假設每增加一人，等待時間增加5分鐘
    } else {
      setBenchPressMessage('人數已滿無法預約');
    }
  };

  const decrementBenchPress = () => {
    if (benchPressCount > 0) {
      setBenchPressCount(benchPressCount - 1);
      setBenchPressMessage('');
      setBenchPressWaitTime((benchPressCount - 1) * 5); // 假設每減少一人，等待時間減少5分鐘
    }
  };

  const incrementTreadmill = () => {
    if (treadmillCount < maxCount) {
      setTreadmillCount(treadmillCount + 1);
      setTreadmillMessage('');
      setTreadmillWaitTime((treadmillCount + 1) * 5); // 假設每增加一人，等待時間增加5分鐘
    } else {
      setTreadmillMessage('人數已滿無法預約');
    }
  };

  const decrementTreadmill = () => {
    if (treadmillCount > 0) {
      setTreadmillCount(treadmillCount - 1);
      setTreadmillMessage('');
      setTreadmillWaitTime((treadmillCount - 1) * 5); // 假設每減少一人，等待時間減少5分鐘
    }
  };

  return (
    <div className="user-count">
      <div>
        <span>啞鈴目前使用人數：{dumbbellCount}</span>
        <div>預估等待時間：{dumbbellWaitTime} 分鐘</div>
        <button onClick={incrementDumbbell}>我要預約</button>
        <button onClick={decrementDumbbell}>取消預約</button>
        <span>{dumbbellMessage}</span>
      </div>
      <br/>
      <br/>
      
      <div>
        <span>臥推目前使用人數：{benchPressCount}</span>
        <div>預估等待時間：{benchPressWaitTime} 分鐘</div>
        <button onClick={incrementBenchPress}>我要預約</button>
        <button onClick={decrementBenchPress}>取消預約</button>
        <span>{benchPressMessage}</span>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <span>跑步機目前使用人數：{treadmillCount}</span>
        <div>預估等待時間：{treadmillWaitTime} 分鐘</div>
        <button onClick={incrementTreadmill}>我要預約</button>
        <button onClick={decrementTreadmill}>取消預約</button>
        <span>{treadmillMessage}</span>
      </div>
    </div>
  );
}

export default UserCount;
