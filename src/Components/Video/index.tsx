// #region Global Imports
import React from "react";
import { useRef, useState } from "react";

export const Video: React.FunctionComponent<any> = ({ mode }) => {
  const videoRef = useRef(null);
  const questions = [
    {
      question: "두 사람이 처음 만난 장소는?",
      options: ["클럽", "회사", "술집", "카페"],
      answer: "술집",
    },
    {
      question: "두 사람의 신혼 여행 장소는?",
      options: ["발리", "칸쿤", "부산", "화성"],
      answer: "칸쿤",
    },
    // 질문 추가 가능
  ];
  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.style.display = "block";
      video.requestFullscreen();
      video.play();
    }
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
    } else {
      setShowScore(true);

      setTimeout(handlePlay, 2 * 1000);
    }
  };
  return (
    <>
      <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
        <video ref={videoRef} width="100%" height="100%" style={{ display: "none" }} controls>
          <source src="https://kyounghun-joo.github.io/zzu_bbo_marry/static/video/marry.mp4" type="video/mp4" />
        </video>
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
                <h3 className="title">P커플 퀴즈쇼</h3>
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
                        }}
                      >
                        {showScore ? (
                          <div>
                            <h2>퀴즈 완료!</h2>
                            <p>당신의 점수는 {score}점 입니다.</p>
                          </div>
                        ) : (
                          <div>
                            <h2>{questions[currentQuestion].question}</h2>
                            <br />
                            <br />
                            {questions[currentQuestion].options.map((option) => (
                              <div key={option}>
                                <strong>
                                  <input type="radio" value={option} checked={selectedOption === option} onChange={handleOptionChange} />
                                  {option}
                                </strong>
                              </div>
                            ))}
                            <br />

                            <button onClick={handleSubmit}>제출</button>
                          </div>
                        )}
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
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
