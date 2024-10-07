// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { IFooter } from "./Footer";
// #endregion Local Imports

const Footer: React.FunctionComponent<IFooter.IProps> = ({ setMode }): JSX.Element => {
  const modeHandler = (mode) => {
    console.log("mode111", mode);
    window.scrollTo(0, 0);

    setMode((cmode) => {
      return mode;
    });
  };
  return (
    <div id="footer">
      <div className="foot-share">
        <ul className="foot-share-list">
          {/* <li>
            <a href="" className="kakao">
              카카오톡
              <br /> 공유하기
            </a>
          </li>
          <li>
            <a href="" className="facebook">
              페이스북
              <br /> 공유하기
            </a>
          </li> */}
          <li onClick={() => modeHandler("1")}>
            <a href="#" className="wedding">
              웨딩 모드
            </a>
          </li>
          <li onClick={() => modeHandler("2")}>
            <a href="#" className="normal">
              일반 모드
            </a>
          </li>
          <li onClick={() => modeHandler("party")}>
            <a href="#" className="party">
              파티 모드
            </a>
          </li>
          <li onClick={() => modeHandler("quiz")}>
            <a href="#" className="quiz">
              퀴즈 모드
            </a>
          </li>
        </ul>
      </div>
      <div className="foot-logo">it`s card</div>
    </div>
  );
};

export { Footer };
