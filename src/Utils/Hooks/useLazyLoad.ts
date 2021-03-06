/* eslint-disable no-underscore-dangle */
import { useEffect, useReducer, useCallback } from "react";
import debounce from "lodash.debounce";

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "set": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "onGrabData": {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        currentPage: state.currentPage + 1,
      };
    }
    default:
      return state;
  }
};

interface IUseLazyLoad {
  triggerRef: any;
  onGrabData: any;
  options: any;
}

const useLazyLoad = ({ triggerRef, onGrabData, options }: IUseLazyLoad) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    currentPage: 1,
    data: [],
  });

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _handleEntry = async (entry: any) => {
    const boundingRect = entry.boundingClientRect;
    const { intersectionRect } = entry;

    if (
      !state.loading &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch({ type: "set", payload: { loading: true } });
      const data = await onGrabData(state.currentPage);
      dispatch({ type: "onGrabData", payload: { data } });
    }
  };
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries: any) => {
      handleEntry(entries[0]);
    },
    [handleEntry],
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect, options);

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect, options]);

  return state;
};

export default useLazyLoad;
