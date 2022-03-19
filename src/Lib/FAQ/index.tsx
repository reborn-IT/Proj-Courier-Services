import React from 'react';
import './FAQ.scss';
import { DATA } from '../../Utils/FAQData';
import FAQComponent from '../../Components/FAQComponent';

function FAQ() {
  return (
    <div className="column-centered-flex">
      <h2 className="highlighted-title">Frequently Asked Questions</h2>

      <div className="questions-wrapper">
        {
            DATA.map((item) => (
              <FAQComponent
                key={item.id}
                id={item.id}
                Question={item.Question}
                Answer={item.Answer}
              />
            ))
        }
      </div>
    </div>
  );
}

export default FAQ;
