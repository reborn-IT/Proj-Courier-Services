import React, { useState } from 'react';
import DownArrowIcon from '../../Assets/Icons/downArrow.svg';
import { FAQDataInterface } from '../../Utils/FAQData';
import './FAQComponent.scss';

function FAQComponent({ id, Question, Answer } :FAQDataInterface) {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`question-${id} question-wrapper`}
        onClick={() => setRevealed(!revealed)}
      >
        <h4>{Question}</h4>
        <img
          src={DownArrowIcon}
          alt="Down Arrow Icon"
          style={{
            width: '1.7rem',
            transform: `rotate(${revealed ? '180deg' : '0'})`,
          }}
        />
      </button>
      <div
        className={`
          ans-${id} answer-wrapper ${revealed ? 'answer-revealed' : ''}
        `}
      >
        <p>
          {Answer}
        </p>
      </div>
    </>
  );
}

export default FAQComponent;
