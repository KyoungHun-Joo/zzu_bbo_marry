// #region Global Imports
import React from "react";
// #endregion Global Imports
// #imageUrl='/images/floral-leaf/floral-leaf-1.png'

// #region Local Imports
// #endregion Local Imports

export const Section2: React.FunctionComponent<any> = ({ mode }) => {
  return (
    <>
      <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
        <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
          <img src="/zzu_bbo_marry/static/images/shape-1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
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
                <h3 className="title">초대장</h3>
                {/* <p>새로운 시작</p> */}

                <img src="/zzu_bbo_marry/static/images/section_shape.png" alt="Shape" />
              </div>
            </div>
            <div
              className="contact_wrapper wow fadeInUpBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
              style={{
                paddingBottom: 30,
                boxShadow: "none",
                visibility: "visible",
                animationDuration: "1.3s",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="section_title text-center pb-30 greeting-section">
                    <div
                      className="after-line"
                      style={{
                        textAlign: "left",
                        paddingTop: 20,
                        paddingBottom: 20,
                        maxWidth: 400,
                        margin: "auto",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1.7rem",
                          lineHeight: "inherit",
                          color: "dimgrey",
                          textAlign: "center",
                          marginLeft: "10%",
                        }}
                      >
                        {mode === "1" ? (
                          <i style={{ fontStyle: "normal" }}>
                            <b>한</b>평생을 같이하며 사랑을
                            <br />
                            <b>주</b>고받고 싶은 사람이 생겼습니다
                            <br />
                            <b>보</b>내온 시간과 각자 겪어온
                            <br />
                            <b>경</b>험들은 다르지만 이제 하나가 되어
                            <br />
                            <b>라</b>넌큘러스 꽃말처럼 영원한 사랑을 다짐합니다
                            <br />
                            <b>훈</b>남훈녀의 앞길을 축복해 주시면 감사하겠습니다
                          </i>
                        ) : mode === "party" ? (
                          <i style={{ fontStyle: "normal" }}>
                            내가 그의 이름을 불러 주기 전에는
                            <br />
                            그는 다만 하나의 몸짓에 지나지 않았다.
                            <br />
                            <br />
                            내가 그의 이름을 불러 주었을 때
                            <br />
                            그는 나에게로 와서 꽃이 되었다.
                            <br />
                            <br />
                            서로가 마주보며 다져온 사랑을 이제
                            <br />
                            함께 한 곳을 바라보며 걸어갈 수 있는
                            <br />큰 사랑으로 키우고자 합니다.
                            <br />
                            <br />
                            저희 두 사람이 사랑의 이름으로 지켜나갈 수 있도록
                            <br />
                            앞날을 축복해 주시면 감사하겠습니다.
                            <br />
                            <br />
                            <br />
                            <br />
                          </i>
                        ) : (
                          <i style={{ fontStyle: "normal" }}>
                            첫눈에 반해 사랑을 쟁취한 상남자
                            <br />
                            고백은 받았지만 고민하던 철벽녀
                            <br />
                            <br />
                            두 사람은 어떤 상황에서도 서로의 웃음이
                            <br />
                            되어주며 사랑을 키워왔습니다
                            <br />
                            <br />
                            앞으로 한 곳을 바라보며 더 큰 사랑을 키우고자 합니다.
                            <br />
                            <br />
                            저희의 앞날을 축복해주시면 감사하겠습니다.
                            <br />
                            <br />
                            <br />
                          </i>
                        )}
                      </p>
                    </div>

                    <p className="text">
                      <br />
                      <strong style={{ fontSize: "3rem", verticalAlign: "middle" }}>{mode === "1" || mode === "2" ? "주창선 이화실" : "한보라"}</strong> 의{" "}
                      {mode === "1" || mode === "2" ? "장남" : "남자"} <strong style={{ fontSize: "3rem", verticalAlign: "middle" }}>경훈</strong>
                      <br />
                      <br />
                      <strong style={{ fontSize: "3rem", verticalAlign: "middle" }}>{mode === "1" || mode === "2" ? "한사홍 심재선" : "주경훈"}</strong> 의{" "}
                      {mode === "1" || mode === "2" ? "차녀" : "여자"} <strong style={{ fontSize: "3rem", verticalAlign: "middle" }}>보라</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coming_soon_shape_2">
          <img src="/zzu_bbo_marry/static/images/shape-2.png" alt="shape" />
        </div>
      </section>
    </>
  );
};
