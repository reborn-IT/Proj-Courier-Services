/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDeletingFilterLogList } from "../../Store/DeletingFilterCards/selectors";

interface CustomCheckBoxI {
  id: number;
  onChangeHandler: (id: number) => void;
  extraTailwindCss?: string;
}

function CustomCheckBox({
  id,
  onChangeHandler,
  extraTailwindCss,
}: CustomCheckBoxI) {
  const currentDeletingList = useSelector(getDeletingFilterLogList);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    const contains = currentDeletingList?.some(
      (item) => JSON.stringify({ id }) === JSON.stringify(item),
    );
    if (contains) setIsSelected(true);
    else setIsSelected(false);
  }, [currentDeletingList, id]);

  return (
    <input
      checked={isSelected}
      onChange={() => onChangeHandler(id)}
      type="checkbox"
      className={`w-6 cursor-pointer h-6 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-0 ${extraTailwindCss}`}
    />
  );
}

CustomCheckBox.defaultProps = {
  extraTailwindCss: "",
};

export default CustomCheckBox;
