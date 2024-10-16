// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

export const SectionCall: React.FunctionComponent<any> = () => {
  return (
    <section id="footer" className="footer_area" style={{ paddingBottom: "10%" }}>
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
        <h3 className="title">연락처</h3>

        <img src="/zzu_bbo_marry/static/images/section_shape.png" alt="Shape" />
      </div>
      <div className="footer_shape_1">
        <img src="/zzu_bbo_marry/static/images/shape-1.png" alt="shape" />
      </div>
      <div className="container">
        <div className="footer_widget pt-50 pb-10 text-center">
          <div className="footer_title">
            <h5 className="title">
              신랑한테 연락하기
              <a href="tel:01072857889">
                <img className="com-btn tel sl" src="/zzu_bbo_marry/static/images/icon_tel.png" alt="shape" />
              </a>
            </h5>
            <br />
            <br />
            <h5 className="title">
              신부한테 연락하기
              <a href="tel:01041104793">
                <img className="com-btn tel sb" src="/zzu_bbo_marry/static/images/icon_tel.png" alt="shape" />
              </a>
            </h5>
          </div>
        </div>
      </div>
      <section className="honjuTel-section footer_widget">
        <div className="con footer_title">
          <div className="col">
            <div className="title call-title">신랑 측 혼주</div>
            <div className="box first">
              <div className="name">
                <span style={{ verticalAlign: "middle" }}>아버지</span>
                <strong style={{ verticalAlign: "middle" }}>주창선</strong>
                <a href="tel:01042636650">
                  <img className="com-btn tel sl" src="/zzu_bbo_marry/static/images/icon_tel.png" alt="shape" />
                </a>
              </div>
            </div>
            <div className="box">
              <div className="name">
                <span style={{ verticalAlign: "middle" }}>어머니</span>
                <strong style={{ verticalAlign: "middle" }}>이화실</strong>
                <a href="tel:01087157089">
                  <img className="com-btn tel sl" src="/zzu_bbo_marry/static/images/icon_tel.png" alt="shape" />
                </a>
              </div>
            </div>
          </div>
          <div className="col rightCol">
            <div className="title call-title">신부 측 혼주</div>
            <div className="box first">
              <div className="name">
                <span style={{ verticalAlign: "middle" }}>아버지</span> <strong style={{ verticalAlign: "middle" }}>한사홍</strong>
                <a href="tel:01052179316">
                  <img className="com-btn tel sb" src="/zzu_bbo_marry/static/images/icon_tel.png" alt="shape" />
                </a>
              </div>
            </div>
            <div className="box">
              <div className="name">
                <span style={{ verticalAlign: "middle" }}>어머니</span> <strong style={{ verticalAlign: "middle" }}>심재선</strong>
                <a href="tel:01045414793">
                  <img className="com-btn tel sb" src="/zzu_bbo_marry/static/images/icon_tel.png" alt="shape" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_shape_1">
          <img src="/zzu_bbo_marry/static/images/shape-1.png" alt="shape" />
        </div>
      </section>
      <div className="coming_soon_shape_2">
        <img src="/zzu_bbo_marry/static/images/shape-2.png" alt="shape" />
      </div>
    </section>
  );
};
