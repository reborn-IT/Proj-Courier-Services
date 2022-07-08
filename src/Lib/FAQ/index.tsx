/* eslint-disable max-len */
import React from "react";
import { DATA } from "../../Utils/FAQData";
import FAQComponent from "../../Components/FAQComponent";

function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h2 className="max-w-[80vw] sm:max-w-full text-xl md:text-3xl mb-5 font-semibold text-drop-grey">
        Frequently Asked Questions
      </h2>

      <div className="questions-wrapper mx-auto mt-6  w-[90%] md:w-3/4 xl:w-4/5 2xl:w-[98%]">
        {DATA.map((item) => (
          <FAQComponent
            key={item.id}
            id={item.id}
            Question={item.Question}
            Answer={item.Answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
