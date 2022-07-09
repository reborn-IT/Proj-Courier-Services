/* eslint-disable max-len */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommonRoundedButton from "../../Components/CommonRoundedButton";
import ModalCloseButton from "../../Components/ModalCloseButton";
import { fetchModalStateRequest } from "../../Store/FilterMenuModal/actions";
import { getModalState } from "../../Store/FilterMenuModal/selectors";

function ConfirmationModal() {
  const filterMenuOpened = useSelector(getModalState);
  const [input, setInput] = useState<string>();
  const dispatch = useDispatch();
  const CloseModal = () => {
    if (filterMenuOpened) {
      dispatch(fetchModalStateRequest(filterMenuOpened));
    }
  };

  const currentPath = useLocation();
  const navigate = useNavigate();

  function handleRoute() {
    switch (currentPath.pathname) {
      case "/":
        navigate("results", { replace: true });
        break;
      case "/results":
        dispatch(fetchModalStateRequest(false));
        break;
      default:
        navigate("results", { replace: true });
        break;
    }
  }

  return (
    <div className="modal rounded-2xl p-8 bg-drop-white fixed overflow-y-auto w-[95%] lg:w-3/5 h-auto z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center justify-between">
        <h4 className="text-4xl text-drop-primary font-semibold">
          Save filter information?
        </h4>
        <ModalCloseButton ClickHandler={() => CloseModal()} />
      </div>
      <p className="text-base lg:text-xl font-semibold my-8 text-drop-grey">
        Save your filter data, so you can directly see and access them in your
        profile.
      </p>
      <form className="form">
        <p className="mb-3">
          Title
          <span className="text-drop-red ml-1">*</span>
        </p>
        <input
          className="border border-drop-grey rounded-lg p-4 bg-transparent"
          type="text"
          placeholder="Enter title for save filter data"
          style={{
            width: "calc(100% - 2rem)",
          }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <div className="flex items-center justify-center md:justify-end mt-7">
          <CommonRoundedButton ClickHandler={() => handleRoute()}>
            No, Just Let me in
          </CommonRoundedButton>
          <span className="mx-2" />
          <CommonRoundedButton
            styles={{ backgroundColor: "#D32424", marginRight: "1rem" }}
          >
            <Link to="results">Save</Link>
          </CommonRoundedButton>
        </div>
      </form>
    </div>
  );
}

export default ConfirmationModal;
