/* eslint-disable max-len */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourierServiceModalState } from "../../Store/CourierServiceModal/selectors";
import { fetchCourierServiceLabelStateRequest } from "../../Store/CourierServiceModal/actions";
import ModalCloseButton from "../../Components/ModalCloseButton";
import "./CourierServiceModal.scss";

export interface ICourierServiceModal {
  title: string;
  description: string;
}

function CourierServiceModal({ title, description }: ICourierServiceModal) {
  const state: boolean | null = useSelector(getCourierServiceModalState);
  const dispatch = useDispatch();

  const CloseModal = () => {
    dispatch(fetchCourierServiceLabelStateRequest(false));
  };

  return (
    <div
      className={`service-modal-wrapper fixed top-0 left-0 right-0 bottom-0 w-full h-full ${
        state ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div className="modal rounded-2xl p-8 bg-drop-white  overflow-y-auto w-3/5 h-auto transition-all">
        <div className="flex items-center justify-between">
          <h4 className="text-4xl text-drop-primary font-semibold">{title}</h4>
          <ModalCloseButton ClickHandler={() => CloseModal()} />
        </div>
        <p className="text-2xl font-semibold mt-8 mb-5 text-drop-grey">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CourierServiceModal;
