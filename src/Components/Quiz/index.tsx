// #region Global Imports
import React, { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

let load = false;

// Styled Components
const QuizContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Option = styled.label<{ isSelected?: boolean; isCorrect?: boolean; isWrong?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px 20px;
  width: 100%;
  max-width: 300px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: black;
      border-color: black;
      color: white;
    `}
  ${({ isWrong }) =>
    isWrong &&
    css`
      background-color: red;
      border-color: red;
      color: white;
    `}


  ${({ isCorrect }) =>
    isCorrect &&
    css`
      background-color: blue;
      border-color: blue;
      color: white;
    `}


  input {
    display: none;
  }

  span {
    flex-grow: 1;
    text-align: left;
  }
`;

const SubmitButton = styled.button`
  background-color: sienna;
  color: white;
  border: none;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  margin-top: 20px;
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #404040;
  }
`;

const RestartButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkgreen;
  }
`;

const ScoreContainer = styled.div`
  font-size: 1.5rem;
  color: green;
`;

const QuizTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #333;
`;

const AnswerReview = styled.p<{ isCorrect?: boolean; isWrong?: boolean }>`
  font-size: 1.2rem;
  ${({ isCorrect }) =>
    isCorrect &&
    css`
      color: blue;
    `}
  ${({ isWrong }) =>
    isWrong &&
    css`
      color: red;
    `}
`;

export const Quiz: React.FunctionComponent<any> = ({ mode }) => {
  const [isValid, setIsValid] = useState(false);
  const [Component, setComponent] = useState<React.ComponentType<{ source: string }> | null>(null);
  const router = useRouter();
  const { query } = router;

  console.log("quiz load");
  const handleSecret = async () => {
    if (!("secret" in query)) return;
    const res = await fetch(`https://zzubbomarry.s3.ap-northeast-2.amazonaws.com/${query.secret}.mp4`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      console.log(" is valid ");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsValid(true);
      console.log("test1");
      const Video = dynamic(() => import("../Video").then((mod) => mod.Video), {
        ssr: false, // 서버사이드 렌더링 시 동적 로딩 비활성화
      });

      setComponent(Video);
    }
  };

  const questions = [
    {
      question: "두 사람이 처음 만난 장소는?",
      options: ["클럽", "회사", "이자카야", "카페"],
      answer: "이자카야",
    },
    {
      question: "두 사람의 신혼 여행 장소는?",
      options: ["발리", "칸쿤", "부산", "화성"],
      answer: "칸쿤",
    },
    {
      question: "두 사람의 나이 차이는?",
      options: ["신랑-1", "신부-1", "신랑+1", "신부+1", "동갑"],
      answer: "동갑",
    },
    {
      question: "두 사람의 신혼 여행 장소는?",
      options: ["발리", "칸쿤", "부산", "화성"],
      answer: "칸쿤",
    },
    // 질문 추가 가능
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [onceCheck, setOnceCheck] = useState(false);

  const [highlightedOption, setHighlightedOption] = useState<{ correct?: string; wrong?: string }>({});
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleOptionChange = (event) => {
    console.log("handle option chance", event.target.value);
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedUserAnswers);
    console.log("userAnswer", userAnswers);
    console.log("updatedUserAnswers", updatedUserAnswers);
    console.log("selectedOption", selectedOption);
    if (selectedOption === questions[currentQuestion].answer) {
      if (!onceCheck) {
        setScore(score + 1);
      }
      setHighlightedOption({ correct: selectedOption });
      setTimeout(() => {
        console.log("timeout before", userAnswers);
        goToNextQuestion();
      }, 500);
    } else {
      setHighlightedOption({ correct: questions[currentQuestion].answer, wrong: selectedOption });
      setTimeout(() => {
        goToNextQuestion();
      }, 500);
    }

    if (!load) {
      handleSecret();
      load = true;
    }
  };

  const goToNextQuestion = () => {
    console.log("go next user answer", userAnswers);
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      console.log("go next ", currentQuestion, nextQuestion);
      setSelectedOption(userAnswers[nextQuestion] || "");

      if (onceCheck) {
        setHighlightedOption({
          correct: questions[nextQuestion].answer,
          wrong: userAnswers[nextQuestion] !== questions[nextQuestion].answer ? userAnswers[nextQuestion] : undefined,
        });
      }
    } else {
      setShowScore(true);
      setOnceCheck(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0 && !onceCheck) {
      const goQuestion = currentQuestion - 1;
      console.log("currentQuestion", currentQuestion, onceCheck, goQuestion);

      setSelectedOption(userAnswers[goQuestion] || "");
      setHighlightedOption({
        correct: questions[goQuestion].answer,
        wrong: userAnswers[goQuestion] !== questions[goQuestion].answer ? userAnswers[goQuestion] : undefined,
      });
      setShowScore(false);
    }

    if (onceCheck) {
      console.log("currentQuestion onceCheck", currentQuestion, questions.length);
      const goQuestion = currentQuestion - 1;

      setSelectedOption(userAnswers[goQuestion] || "");
      setCurrentQuestion(goQuestion);

      setHighlightedOption({
        correct: questions[goQuestion].answer,
        wrong: userAnswers[goQuestion] !== questions[goQuestion].answer ? userAnswers[goQuestion] : undefined,
      });
      setShowScore(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setHighlightedOption({});
    setOnceCheck(false);
  };

  return (
    <>
      <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
        {isValid && Component ? (
          <>
            <Component source={`https://zzubbomarry.s3.ap-northeast-2.amazonaws.com/${query.secret}.mp4`} />
          </>
        ) : (
          <>
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
                    <SectionTitle>P커플 퀴즈쇼</SectionTitle>
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
                          <QuizContainer>
                            {showScore ? (
                              <ScoreContainer>
                                <h2>퀴즈 완료!</h2>
                                <p>당신의 점수는 {score}점 입니다.</p>
                                <div>
                                  <BackButton onClick={goToPreviousQuestion}>이전</BackButton>
                                  <RestartButton onClick={restartQuiz}>다시 풀기</RestartButton>
                                </div>
                              </ScoreContainer>
                            ) : (
                              <div>
                                <QuizTitle>{questions[currentQuestion].question}</QuizTitle>
                                <OptionsContainer>
                                  {questions[currentQuestion].options.map((option) => (
                                    <Option
                                      key={option}
                                      isSelected={selectedOption === option}
                                      isCorrect={highlightedOption.correct === option}
                                      isWrong={highlightedOption.wrong === option}
                                    >
                                      <input type="radio" value={option} checked={selectedOption === option} onChange={handleOptionChange} />
                                      <span>{option}</span>
                                    </Option>
                                  ))}
                                </OptionsContainer>
                                <div>
                                  {currentQuestion > 0 && <BackButton onClick={goToPreviousQuestion}>이전</BackButton>}
                                  <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
                                </div>
                              </div>
                            )}
                          </QuizContainer>
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
          </>
        )}
      </section>
    </>
  );
};
