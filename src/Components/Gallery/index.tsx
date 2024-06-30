// #region Global Imports
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// #endregion Global Imports
// imageUrl='/zzu_bbo_marry/static/images/floral-leaf/floral-leaf-1.png'

export const Gallery: React.FunctionComponent<any> = ({ mode, setOpen }) => {
  const modalHandler = () => {
    console.log("modal handler");
    setOpen((prev) => !prev);
  };
  const handleClick = (e) => {
    e.preventDefault();

    modalHandler();
    // 추가적인 동작이 있다면 여기에 작성
  };

  return (
    <section className="galleryWrap atm" id="galleryWrap" style={{ paddingBottom: "10%" }}>
      <div className="galleryInner">
        <div
          className="section_title pt-50 wow fadeIn"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDuration: "1.3s",
            animationDelay: "0.2s",
            animationName: "fadeIn",
            textAlign: "center",
          }}
        >
          <h3 className="title">사진첩</h3>

          <img src="/zzu_bbo_marry/static/images/section_shape.png" alt="Shape" />
        </div>

        <div className="galWrap mt">
          <div className="inner">
            {/* <div className="videoImg">
                  <a href="#;"
                  onClick={(e) => handleClick(e, "/about")} 
                  >
                      <img src="https://wedding.dddproject.com/data/file/order_form/2113089417_9kKsIDFh_657c81376b1ea29ca76f6b4ec84f36ecb38811b5.jpeg?v=1234567890" alt="비디오이미지" />
                      <span className="btnPlay"></span>
                  </a>
              </div> */}

            <div className="gallery">
              <div className="galList">
                <div className="col">
                  <ul>
                    <li slide-num="1">
                      <a href="#" onClick={handleClick}>
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/zzu_bbo_marry/static/images/photo/${mode === "1" ? "" : "party_"}gallery1.jpeg?v=1234567890)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="2">
                      <a href="#" onClick={handleClick}>
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/zzu_bbo_marry/static/images/photo/${mode === "1" ? "" : "party_"}gallery2.jpeg?v=1234567890)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="3">
                      <a href="#" onClick={handleClick}>
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/zzu_bbo_marry/static/images/photo/${mode === "1" ? "" : "party_"}gallery3.jpeg?v=1234567890)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="4">
                      <a href="#" onClick={handleClick}>
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/zzu_bbo_marry/static/images/photo/${mode === "1" ? "" : "party_"}gallery4.jpeg?v=1234567890)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="5">
                      <a href="#" onClick={handleClick}>
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/zzu_bbo_marry/static/images/photo/${mode === "1" ? "" : "party_"}gallery5.jpeg?v=1234567890)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="6">
                      <a href="#" onClick={handleClick}>
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/zzu_bbo_marry/static/images/photo/${mode === "1" ? "" : "party_"}gallery6.jpeg?v=1234567890)`,
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-9" onClick={handleClick}>
                  <div className="section_title text-center greeting-section">
                    <p className="text" style={{ margin: "0px" }}>
                      <br />
                      <strong>사진 더보기</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
