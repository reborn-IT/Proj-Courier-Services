/* eslint-disable max-len */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonRoundedButton from "../../Components/CommonRoundedButton";
import { fetchModalStateRequest } from "../../Store/FilterMenuModal/actions";
import { getModalState } from "../../Store/FilterMenuModal/selectors";

function ConfirmationModal() {
  const filterMenuOpened = useSelector(getModalState);
  const [input, setInput] = useState<string>();
  const dispatch = useDispatch();
  const CloseModal = () => {
    dispatch(fetchModalStateRequest(filterMenuOpened));
  };
  return (
    <div className="modal rounded-2xl p-8 bg-drop-white fixed overflow-y-auto w-3/5 h-2/3 2xl:h-[55%] z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center justify-between">
        <h4 className="text-4xl text-drop-primary font-semibold">
          Save filter data?
        </h4>
        <button type="button" onClick={() => CloseModal()}>
          <svg width="71" height="71" viewBox="0 0 71 71" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.6898 5.91431H48.3385C58.3673 5.91431 65.0827 12.9551 65.0827 23.4276V47.6002C65.0827 58.0431 58.3673 65.081 48.3385 65.081H22.6898C12.661 65.081 5.91602 58.0431 5.91602 47.6002V23.4276C5.91602 12.9551 12.661 5.91431 22.6898 5.91431ZM44.4039 44.3726C45.4098 43.3698 45.4098 41.7427 44.4039 40.7369L39.1381 35.471L44.4039 30.2022C45.4098 29.1993 45.4098 27.5427 44.4039 26.5368C43.3981 25.5281 41.771 25.5281 40.7356 26.5368L35.4993 31.7997L30.2335 26.5368C29.1981 25.5281 27.571 25.5281 26.5652 26.5368C25.5593 27.5427 25.5593 29.1993 26.5652 30.2022L31.831 35.471L26.5652 40.7073C25.5593 41.7427 25.5593 43.3698 26.5652 44.3726C27.0681 44.8756 27.7485 45.1448 28.3993 45.1448C29.0798 45.1448 29.7306 44.8756 30.2335 44.3726L35.4993 39.1394L40.7652 44.3726C41.2681 44.9081 41.9189 45.1448 42.5698 45.1448C43.2502 45.1448 43.901 44.8756 44.4039 44.3726Z"
              fill="#D32424"
            />
          </svg>
        </button>
      </div>
      <p className="text-xl font-semibold my-8 text-drop-grey">
        Save your filter data, so you can directly see and access them in your
        profile.
      </p>
      <form className="form">
        <p className="mb-3">Title</p>
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

        <div className="flex items-center justify-end mt-7">
          <CommonRoundedButton>No, Just Let me in</CommonRoundedButton>
          <span className="mx-2" />
          <CommonRoundedButton
            styles={{ backgroundColor: "#D32424", marginRight: "1rem" }}
          >
            Save
          </CommonRoundedButton>
        </div>
      </form>
    </div>
  );
}

export default ConfirmationModal;
