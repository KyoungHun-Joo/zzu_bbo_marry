// #region Global Imports
import React from "react";
import styled from "styled-components";

// #endregion Global Imports
// imageUrl='/images/floral-leaf/floral-leaf-1.png'

// #region Local Imports
// #endregion Local Imports

const Container = styled.section<any>``;

export const Section1: React.FunctionComponent<any> = ({ mode }) => {
  // party 모드일 때 색상을 #d1d1d1로 설정하고, 그 외에는 기본 색상을 사용
  const textColor = mode === "party" ? "#d1d1d1" : "#273038";

  return (
    <Container
      id="hero"
      className={`${
        mode === "party" ? "party" : mode == "2" ? "normal" : "heroMain"
      } hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white overlay-content`}
    >
      <main id="heroMain" style={{ marginBottom: "15%" }}>
        <h4 style={{ color: "#d1d1d1" }}>우 리 결 혼 합 니 다</h4>
        <h1 style={{ color: "#d1d1d1" }}>주경훈 & 한보라</h1>
        <p style={{ color: textColor }}>2024. 12. 7. (토) 오후 3:30</p>
        <p style={{ color: textColor }}>아펠가모 반포 웨딩홀</p>
        <div className="simply-countdown" />
        <div className="simply-countdown" />
        <div className="simply-countdown" />

        <div className="simply-countdown" />
        <div className="d-flex w-75 d-flex justify-content-center align-items-center flex-column mx-auto mt-4">
          {/* <a className="btn btn-md" target="_blank">
              <i className="bi bi-calendar"></i> Save Tanggal
            </a> */}
        </div>
      </main>
    </Container>
  );
};
