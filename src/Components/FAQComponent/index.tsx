/* eslint-disable max-len */
import React, { useState } from "react";
import DownArrowIcon from "../../Assets/Icons/downArrow.svg";
import { FAQDataInterface } from "../../Utils/FAQData";

function FAQComponent({ id, Question, Answer }: FAQDataInterface) {
  const [revealed, setRevealed] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={`question-${id} question-wrapper flex items-center justify-between mx-auto mb-8 w-[90%]`}
        onClick={() => setRevealed(!revealed)}
      >
        <h4 className="text-md sm:text-xl font-semibold text-drop-grey">
          {Question}
        </h4>
        <img
          src={DownArrowIcon}
          alt="Down Arrow Icon"
          className={`transition-all duration-300 ease-in-out ${
            revealed ? "rotate-180" : "rotate-0"
          } w-7`}
        />
      </button>
      <div
        className={`
          ans-${id} answer-wrapper mx-auto w-[90%] overflow-hidden transition-all duration-300 ease-in-out sm:ml-12 ${
          revealed ? "h-24 sm:h-8 mb-7" : "h-0"
        }
        `}
      >
        <p>{Answer}</p>
      </div>
    </>
  );
}

export default FAQComponent;
