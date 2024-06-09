import React, { useState } from "react";
import "./Venue.css";

const Venue = () => {
  const [selectedVenue, setSelectedVenue] = useState(""); // 儲存所選場地
  const [bookingDate, setBookingDate] = useState(""); // 儲存預訂日期和時間

  const handleVenueSelection = (venue) => {
    setSelectedVenue(venue); // 設置所選場地
  };

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value); // 設置預訂日期和時間
  };

  const handleSubmit = () => {
    if (selectedVenue && bookingDate) {
      alert(
        `Booking confirmed for ${selectedVenue.replace(
          "-",
          " "
        )} on ${bookingDate}`
      );
      // 彈出確認消息，將場地名稱中的 '-' 替換為空格
    } else {
      alert("Please select a venue and booking date."); // 提示用戶選擇場地和日期
    }
  };

  return (
    <div className="venue-booking-container">
      {" "}
      {/* 整體容器 */}
      <h1>Venue Reservation</h1>
      <div className="venue-options">
        {" "}
        {/* 場地選項容器 */}
        <button
          className={`venue-button ${
            selectedVenue === "basketball" ? "active" : ""
          }`}
          // 根據選擇場地設置 active 類
          onClick={() => handleVenueSelection("basketball")}
        >
          Basketball Court
        </button>
        <button
          className={`venue-button ${
            selectedVenue === "badminton" ? "active" : ""
          }`}
          onClick={() => handleVenueSelection("badminton")}
        >
          Badminton Court
        </button>
        <button
          className={`venue-button ${
            selectedVenue === "table-tennis" ? "active" : ""
          }`}
          onClick={() => handleVenueSelection("table-tennis")}
        >
          Table Tennis Hall
        </button>
        <button
          className={`venue-button ${
            selectedVenue === "swimming-pool" ? "active" : ""
          }`}
          onClick={() => handleVenueSelection("swimming-pool")}
        >
          Swimming Pool
        </button>
        <button
          className={`venue-button ${
            selectedVenue === "tennis-court" ? "active" : ""
          }`}
          onClick={() => handleVenueSelection("tennis-court")}
        >
          Tennis Court
        </button>
      </div>
      {selectedVenue && ( // 當選擇了場地後顯示預訂表單
        <div className="selected-venue">
          {" "}
          {/* 已選場地信息容器 */}
          <h2>Selected Venue: {selectedVenue.replace("-", " ")}</h2>
          <label htmlFor="booking-date">Select Booking Date and Time:</label>
          <div className="booking-inputs">
            {" "}
            {/* 預訂輸入容器 */}
            <input
              type="datetime-local"
              id="booking-date"
              name="booking-date"
              value={bookingDate} // 綁定預訂日期和時間
              onChange={handleBookingDateChange} // 當日期和時間改變時觸發
            />
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
            {/* 提交按鈕 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Venue;
