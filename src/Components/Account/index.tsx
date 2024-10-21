import React, { useEffect, useState } from "react";

export const Account: React.FunctionComponent<any> = () => {
  // 신랑측 탭 상태 관리 (true: 열림, false: 닫힘)
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  // 신부측 탭 상태 관리
  const [isBrideOpen, setIsBrideOpen] = useState(false);

  // 계좌번호 데이터를 상태로 관리
  const [accountData, setAccountData] = useState({
    groom: "",
    bride: "",
    groomFather: "",
    groomMother: "",
    brideFather: "",
    brideMother: "",
  });

  // URL에서 쿼리스트링을 가져와 복호화 및 JSON 파싱
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const encodedData = urlParams.get("accountData");

    if (encodedData) {
      try {
        // Base64 디코딩 및 JSON 파싱
        const decodedData = JSON.parse(atob(encodedData));

        setAccountData({
          groom: decodedData.groom || "",
          bride: decodedData.bride || "",
          groomFather: decodedData.groomFather || "",
          groomMother: decodedData.groomMother || "",
          brideFather: decodedData.brideFather || "",
          brideMother: decodedData.brideMother || "",
        });
      } catch (err) {
        console.error("데이터 복호화에 실패했습니다.", err);
      }
    }
  }, []);

  // 신랑측 토글 로직
  const handleGroomToggle = () => {
    setIsGroomOpen(!isGroomOpen);
  };

  // 신부측 토글 로직
  const handleBrideToggle = () => {
    setIsBrideOpen(!isBrideOpen);
  };

  // 클립보드에 계좌번호 복사하는 함수
  const copyToClipboard = (accountNumber: string) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        alert("계좌번호가 클립보드에 복사되었습니다: " + accountNumber);
      })
      .catch((err) => {
        console.error("클립보드 복사에 실패했습니다:", err);
      });
  };

  return (
    <section id="gift-section" className="footer_area" style={{ paddingBottom: "10%" }}>
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
        <h3 className="title">마음 전하실 곳</h3>

        <img src="/zzu_bbo_marry/static/images/section_shape.png" alt="Shape" />
      </div>
      <div className="footer_shape_1">
        <img src="/zzu_bbo_marry/static/images/shape-1.png" alt="shape" />
      </div>

      <div className="container pt-50 ">
        <div id="gift-info" className="gift-display row animation fadeInUp animated" style={{ visibility: "visible" }}>
          {/* 신랑측 정보 */}
          <div className="col-md-6" style={{ visibility: (accountData.groom != '' ||accountData.groomFather != '' ||accountData.groomMother != '')?"visible":"hidden" ,margin: "0 auto;", marginBottom: "20px" }} id="groom-account">
            <div className="panel panel-default" style={{ border: "none" }}>
              <div role="tab" id="headingGroom">
                <button
                  className={isGroomOpen ? "accordion3 accordion-toggle icon-down-open" : "accordion3 accordion-toggle icon-down-open collapsed"}
                  aria-expanded={isGroomOpen}
                  onClick={handleGroomToggle}
                >
                  {/* 아이콘을 동적으로 변경 */}
                  <i className="icon-pagelines"></i>&nbsp;신랑측
                </button>
              </div>
              <div style={{ display: (isGroomOpen && accountData.groom != '') ? "block" : "none" }} aria-expanded={isGroomOpen}>
                <div className="panel1">
                  <div className="gift-groom">
                    <div className="accountinfo">
                      <p className="lead" style={{ textAlign: "left", fontWeight: "1000" }}>
                        <small>신랑</small>&nbsp;<b>주경훈</b>
                        <span className="right-float">국민 {accountData.groom}</span>
                      </p>
                    </div>
                    <div className="btnouter">
                      <div className="btninner accountbtn-wrapper">
                        <button className="accountbtn gift-one-button" id="groom1" onClick={() => copyToClipboard("국민 " + accountData.groom)}>
                          <i className="icon-doc-text" style={{ margin: "0px 2px" }}></i>
                          계좌번호 복사
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: (isGroomOpen && accountData.groomFather != '') ? "block" : "none" }} aria-expanded={isGroomOpen}>
                <div className="panel1">
                  <div className="gift-groom">
                    <div className="accountinfo">
                      <p className="lead" style={{ textAlign: "left", fontWeight: "1000" }}>
                        <small>혼주</small>&nbsp;<b>주창선</b>
                        <span className="right-float">우리 {accountData.groomFather}</span>
                      </p>
                    </div>
                    <div className="btnouter">
                      <div className="btninner accountbtn-wrapper">
                        <button className="accountbtn gift-one-button" id="groom1" onClick={() => copyToClipboard("우리 " + accountData.groomFather)}>
                          <i className="icon-doc-text" style={{ margin: "0px 2px" }}></i>
                          계좌번호 복사
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: (isGroomOpen && accountData.groomMother != '') ? "block" : "none" }} aria-expanded={isGroomOpen}>
                <div className="panel1">
                  <div className="gift-groom">
                    <div className="accountinfo">
                      <p className="lead" style={{ textAlign: "left", fontWeight: "1000" }}>
                        <small>혼주</small>&nbsp;<b>이화실</b>
                        <span className="right-float">우리 {accountData.groomMother}</span>
                      </p>
                    </div>
                    <div className="btnouter">
                      <div className="btninner accountbtn-wrapper">
                        <button className="accountbtn gift-one-button" id="groom1" onClick={() => copyToClipboard("우리 " + accountData.groomMother)}>
                          <i className="icon-doc-text" style={{ margin: "0px 2px" }}></i>
                          계좌번호 복사
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 신부측 정보 */}

          <div className="col-md-6" style={{  visibility: (accountData.bride != '' ||accountData.brideFather != '' ||accountData.brideMother != '')?"visible":"hidden" ,margin: "0 auto;" }} id="bride-account">
            <div className="panel panel-default" style={{ border: "none" }}>
              <div role="tab" id="headingBride">
                <button
                  className={isBrideOpen ? "accordion4 accordion-toggle icon-down-open" : "accordion4 accordion-toggle icon-down-open collapsed"}
                  aria-expanded={isBrideOpen}
                  onClick={handleBrideToggle}
                >
                  <i className="icon-pagelines"></i>&nbsp;신부측
                </button>
              </div>
              <div style={{ display: (isBrideOpen  && accountData.bride != '') ? "block" : "none" }} aria-expanded={isBrideOpen}>
                <div className="panel2">
                  <div className="gift-bride">
                    <div className="accountinfo">
                      <p className="lead" style={{ textAlign: "left", fontWeight: "1000" }}>
                        <small>신부</small>&nbsp;<b>한보라</b>
                        <span className="right-float">우리 {accountData.bride}</span>
                      </p>
                    </div>
                    <div className="btnouter">
                      <div className="btninner accountbtn-wrapper">
                        <button className="accountbtn gift-one-button" id="bride1" onClick={() => copyToClipboard("우리 " + accountData.bride)}>
                          <i className="icon-doc-text" style={{ margin: "0px 2px" }}></i>
                          계좌번호 복사
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              <div style={{ display: (isBrideOpen && accountData.brideFather != '') ? "block" : "none" }} aria-expanded={isBrideOpen}>
                <div className="panel2">

                  <hr className="line-bride" />
                  <div className="gift-bride parent father">
                    <div className="accountinfo">
                      <p className="lead" style={{ textAlign: "left", fontWeight: "1000" }}>
                        <small>혼주</small>&nbsp;<b>한사홍</b>
                        <span className="right-float">신한 {accountData.brideFather}</span>
                      </p>
                    </div>
                    <div className="btnouter">
                      <div className="btninner accountbtn-wrapper">
                        <button className="accountbtn gift-one-button" id="bride2" onClick={() => copyToClipboard("신한 " + accountData.brideFather)}>
                          <i className="icon-doc-text" style={{ margin: "0px 2px" }}></i>
                          계좌번호 복사
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              <div style={{ display: (isBrideOpen && accountData.brideMother != '') ? "block" : "none" }} aria-expanded={isBrideOpen}>
                <div className="panel2">
                  <hr className="line-bride" />
                  <div className="gift-bride parent mother">
                    <div className="accountinfo">
                      <p className="lead" style={{ textAlign: "left", fontWeight: "1000" }}>
                        <small>혼주</small>&nbsp;<b>심재선</b>
                        <span className="right-float">신한 {accountData.brideMother}</span>
                      </p>
                    </div>
                    <div className="btnouter">
                      <div className="btninner accountbtn-wrapper">
                        <button className="accountbtn gift-one-button" id="bride3" onClick={() => copyToClipboard("신한 " + accountData.brideMother)}>
                          <i className="icon-doc-text" style={{ margin: "0px 2px" }}></i>
                          계좌번호 복사
                        </button>
                      </div>
                    </div>
                  </div>

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
