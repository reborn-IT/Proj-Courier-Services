/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CourierServiceModal.scss';
import { getCourierServiceModalState } from '../../Store/CourierServiceModal/selectors';
import { fetchCourierServiceModalStateRequest } from '../../Store/CourierServiceModal/actions';

export interface ICourierServiceModal {
  title: string;
  description: string;
}

function CourierServiceModal({ title, description }: ICourierServiceModal) {
  const state: boolean | null = useSelector(getCourierServiceModalState);
  const dispatch = useDispatch();

  const CloseModal = () => {
    dispatch(fetchCourierServiceModalStateRequest(state));
  };

  return (
    <div className={`service-modal-wrapper fixed top-0 left-0 right-0 bottom-0 w-full h-full ${state ? 'flex' : 'hidden'} items-center justify-center`}>
      <div className="modal rounded-2xl p-8 bg-drop-white  overflow-y-auto w-3/5 h-auto transition-all">
        <div className="flex items-center justify-between">
          <h4 className="text-4xl text-drop-primary font-semibold">
            {title}
          </h4>
          <button
            type="button"
            onClick={() => CloseModal()}
          >
            <svg
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.6898 5.91431H48.3385C58.3673 5.91431 65.0827 12.9551 65.0827 23.4276V47.6002C65.0827 58.0431 58.3673 65.081 48.3385 65.081H22.6898C12.661 65.081 5.91602 58.0431 5.91602 47.6002V23.4276C5.91602 12.9551 12.661 5.91431 22.6898 5.91431ZM44.4039 44.3726C45.4098 43.3698 45.4098 41.7427 44.4039 40.7369L39.1381 35.471L44.4039 30.2022C45.4098 29.1993 45.4098 27.5427 44.4039 26.5368C43.3981 25.5281 41.771 25.5281 40.7356 26.5368L35.4993 31.7997L30.2335 26.5368C29.1981 25.5281 27.571 25.5281 26.5652 26.5368C25.5593 27.5427 25.5593 29.1993 26.5652 30.2022L31.831 35.471L26.5652 40.7073C25.5593 41.7427 25.5593 43.3698 26.5652 44.3726C27.0681 44.8756 27.7485 45.1448 28.3993 45.1448C29.0798 45.1448 29.7306 44.8756 30.2335 44.3726L35.4993 39.1394L40.7652 44.3726C41.2681 44.9081 41.9189 45.1448 42.5698 45.1448C43.2502 45.1448 43.901 44.8756 44.4039 44.3726Z"
                fill="#D32424"
              />
            </svg>
          </button>
        </div>
        <p className="text-2xl font-semibold mt-8 mb-5 text-drop-grey">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CourierServiceModal;
