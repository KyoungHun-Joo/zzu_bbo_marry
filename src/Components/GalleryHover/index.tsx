// #region Global Imports
import React, { ReactNode, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
// #endregion Global Imports
// imageUrl='/zzu_bbo_marry/static/images/floral-leaf/floral-leaf-1.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// #region Local Imports
// #endregion Local Imports

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { createPortal } from "react-dom";

SwiperCore.use([Pagination, Navigation]);
import { useState } from "react";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const StyledSwiper = styled(Swiper)`
  width: 80vw;
  height: 80vh;
  background-color: white;
  color: black;

  .swiper-button-prev,
  .swiper-button-next {
    color: #000;
    &:after {
      font-size: 20px;
    }
  }
  .swiper-pagination {
    text-align: center;
    font-size: 2rem;
  }
`;

type ModalState = Dispatch<SetStateAction<boolean>>;

interface ModalProps {
  mode: any;
  readonly isOpen: boolean;
  readonly setOpen: ModalState;
  readonly removeModal;
}
export const GalleryHover = ({ mode, isOpen, setOpen, removeModal }: ModalProps) => {
  if (!isOpen) return null;
  let swiper;
  const handleSlideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const middle = e.currentTarget.clientWidth / 2;
    if (e.clientX > middle) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };
  const prefixGallery = mode == 1 ? "wedding_" : mode == 2 ? "" : "party_";

  return createPortal(
    <Wrapper onClick={removeModal}>
      <StyledSwiper
        id="swiper"
        className="swiper"
        pagination={{ type: "fraction" }}
        loop
        navigation
        observer="true"
        observeParents="true"
        parallax="true"
        //onSlideChange={() => console.log("slide change2")}
        onSwiper={(_swiper) => (swiper = _swiper)}
      >
        <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
          <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery1.jpeg?v=1234567890`} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
          <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery2.jpeg?v=1234567890`} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
          <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery3.jpeg?v=1234567890`} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
          <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery4.jpeg?v=1234567890`} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
          <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery5.jpeg?v=1234567890`} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
          <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery6.jpeg?v=1234567890`} />
        </SwiperSlide>
        {mode === "1" ? (
          <>
            <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
              <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery7.jpeg?v=1234567890`} />
            </SwiperSlide>
            <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
              <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery8.jpeg?v=1234567890`} />
            </SwiperSlide>
            <SwiperSlide style={{ padding: "1%" }} className="slide-item" onClick={handleSlideClick}>
              <img height="100%" src={`/zzu_bbo_marry/static/images/photo/${prefixGallery}gallery9.jpeg?v=1234567890`} />
            </SwiperSlide>
          </>
        ) : (
          <></>
        )}
      </StyledSwiper>
    </Wrapper>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};
