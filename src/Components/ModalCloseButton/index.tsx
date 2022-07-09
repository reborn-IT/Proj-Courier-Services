/* eslint-disable max-len */
import React from "react";
import CloseButtonSvg from "../Icons/Svgs/CloseButton.svg";

interface IModalCloseButton {
  ClickHandler: () => void;
}

function ModalCloseButton({ ClickHandler }: IModalCloseButton) {
  return (
    <button
      aria-label="modal close-btn"
      className="hover:scale-105 transform scale-100 duration-300 group h-[61px] w-[61px]"
      type="button"
      onClick={() => ClickHandler()}
      style={{
        backgroundImage: `url(${CloseButtonSvg})`,
      }}
    />
  );
}

export default ModalCloseButton;
