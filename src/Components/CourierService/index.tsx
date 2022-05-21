/* eslint-disable max-len */
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface ICourierService {
    serviceName: string;
    // eslint-disable-next-line react/require-default-props
    optionalTailwindCss?: string;
    onClickHandler: () => void;
}

function CourierService({ serviceName, optionalTailwindCss, onClickHandler }: ICourierService) {
  return (
    <button
      type="button"
      onClick={() => onClickHandler()}
      className={`text-lg duration-300 flex items-center space-x-2 rounded-full px-4 py-3 border border-drop-primary text-drop-primary transition-all hover:border-none hover:bg-drop-primary hover:text-drop-white ${optionalTailwindCss}`}
    >
      <i className="bi bi-info-circle text-xl" />
      <p>{serviceName}</p>
    </button>
  );
}

export default CourierService;
