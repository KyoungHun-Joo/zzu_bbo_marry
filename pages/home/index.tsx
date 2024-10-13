// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports
import { createPortal } from "react-dom";
import { useRouter } from "next/router"; // 추가된 부분

// #region Local Imports
import { Container, Top, TopText, Middle, MiddleLeft, MiddleLeftButtons, MiddleRight, Apod, ApodButton } from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Heading, LocaleButton, Float, Navbar, Section1, Section2, SectionCall, Gallery, GalleryHover, Footer, MapSection, Quiz, Account } from "@Components";
// #endregion Local Imports
import { useState, useEffect } from "react";

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("1");
  const [isServer, setIsServer] = useState(true);

  const router = useRouter(); // 추가된 부분

  // URL 쿼리스트링에서 accountData 확인
  const [showAccount, setShowAccount] = useState(false);

  useEffect(() => {
    if (router.query.accountData) {
      setShowAccount(true);
    }
  }, [router.query]);

  const removeModal = () => {
    console.log("remove modal call open : ", mode, open);
    if (open) setOpen(false);
  };

  return (
    <Container>
      <Section1 mode={mode} />
      <Float mode={mode} />

      <>
        {mode === "quiz" ? (
          <>
            <Quiz></Quiz>
            <Footer setMode={setMode} />
          </>
        ) : (
          <>
            <Section2 mode={mode} />
            <Gallery mode={mode} setOpen={setOpen} />
            <Footer setMode={setMode} />
            <SectionCall />
            <MapSection />

            {/* accountData가 있을 때만 <Account /> 렌더링 */}
            {showAccount && <Account />}

            <GalleryHover mode={mode} isOpen={open} setOpen={setOpen} removeModal={removeModal} />
          </>
        )}
      </>
    </Container>
  );
};

Home.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IHomePage.InitialProps> => {
  return { namespacesRequired: ["common"] };
};

export default Home;
