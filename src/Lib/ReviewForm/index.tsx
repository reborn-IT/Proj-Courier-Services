/* eslint-disable max-len */
import React, { useState } from "react";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { motion, Variants } from "framer-motion";
import ModalCloseButton from "../../Components/ModalCloseButton";
import Highlight from "../../Components/HighLight";
import { ExperienceTypes, ReviewFormSteps } from "../../Utils/constants";
import "bootstrap-icons/font/bootstrap-icons.css";

import UserReviewImage from "../../Assets/Images/user-review.jpg";
import AnonymousPlaceholderImage from "../../Assets/Images/user-placeholder.jpg";
import AngryIconSvg from "../../Components/Icons/Svgs/AngryIcon.svg";
import SadFaceSvg from "../../Components/Icons/Svgs/SadFace.svg";
import GrinningFaceSvg from "../../Components/Icons/Svgs/GrinningFace.svg";
import HeartFaceSvg from "../../Components/Icons/Svgs/HeartFace.svg";
import { CommonRoundedButton } from "../../Components";
import { getReviewCardStatus } from "../../Store/ReviewCard/selectors";
import { fetchReviewCardStateRequest } from "../../Store/ReviewCard/actions";

const highlightVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    display: "block",
  },
  hidden: {
    opacity: 0,
    y: "100%",
    display: "none",
  },
};

const reviewPopupVariants: Variants = {
  visible: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  },
};

const nextButtonVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    display: "flex",
  },
  hidden: {
    opacity: 0,
    y: "100%",
    display: "none",
  },
};

const experienceContentVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    position: "relative",
  },
  hidden: {
    opacity: 0,
    x: "-100%",
    position: "absolute",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const reviewWriteContentVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    display: "block",
  },
  hidden: {
    opacity: 0,
    x: "100%",
    display: "none",
  },
};

const starsPopupVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    display: "block",
  },
  hidden: {
    opacity: 0,
    x: "100%",
    display: "none",
  },
};

const singleStarVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface IHighlight {
  id: number;
  highlight: string;
}

interface IHighlights {
  id: number;
  type: ExperienceTypes;
  highlights: IHighlight[];
}

const highlights: IHighlights[] = [
  {
    id: 1,
    type: "angry",
    highlights: [
      {
        id: 1,
        highlight: "Worst",
      },
      {
        id: 2,
        highlight: "Bad Customer Service",
      },
      {
        id: 3,
        highlight: "Slow Delivery",
      },
    ],
  },
  {
    id: 2,
    type: "sad",
    highlights: [
      {
        id: 1,
        highlight: "Bad Customer Service",
      },
      {
        id: 2,
        highlight: "Parcel Damaged",
      },
      {
        id: 3,
        highlight: "Slow Delivery",
      },
    ],
  },
  {
    id: 3,
    type: "normal",
    highlights: [
      {
        id: 1,
        highlight: "Good Customer Service",
      },
      {
        id: 2,
        highlight: "Fast Delivery",
      },
      {
        id: 3,
        highlight: "Care Delivery",
      },
    ],
  },
  {
    id: 4,
    type: "excellent",
    highlights: [
      {
        id: 1,
        highlight: "Highly Recommended",
      },
      {
        id: 2,
        highlight: "Fast Delivery",
      },
      {
        id: 3,
        highlight: "Care Delivery",
      },
      {
        id: 4,
        highlight: "Great Customer Service",
      },
    ],
  },
];

function ReviewForm() {
  const reviewPopupState: boolean | null = useSelector(getReviewCardStatus);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [showHighlights, setShowHighlights] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<ReviewFormSteps>("STEP_ONE");
  const [visibleHighlights, setVisibleHighlights] = useState<IHighlight[]>([]);
  const [selectedHighlights, setSelectedHighlights] = useState<Set<unknown>>(
    new Set(),
  );
  const [selectedExperienceType, setSelectedExperienceType] =
    useState<ExperienceTypes>("angry");
  const [isTextareaValid, setIsTextareaValid] = useState<boolean>(true);
  const [review, setReview] = useState<string>("");
  const dispatch = useDispatch();

  function handleMotionHighlights() {
    if (showHighlights) {
      setShowHighlights(false);
      setTimeout(() => {
        setShowHighlights(true);
      }, 150);
    }
  }

  function HighlightsHandler(type: ExperienceTypes) {
    setSelectedExperienceType(type);
    setShowHighlights(true);
    setSelectedHighlights(new Set());
    switch (type) {
      case "angry":
        setVisibleHighlights(highlights[0].highlights);
        handleMotionHighlights();
        break;
      case "sad":
        setVisibleHighlights(highlights[1].highlights);
        handleMotionHighlights();
        break;
      case "normal":
        setVisibleHighlights(highlights[2].highlights);
        handleMotionHighlights();
        break;
      case "excellent":
        setVisibleHighlights(highlights[3].highlights);
        handleMotionHighlights();
        break;
      default:
        break;
    }
  }

  function highlightsHandler(highlight: string) {
    if (selectedHighlights.has(highlight)) {
      const cloneSet: Set<unknown> = selectedHighlights;
      cloneSet.delete(highlight);
      setSelectedHighlights(new Set(cloneSet));
    } else {
      setSelectedHighlights(
        (previousSet) => new Set([...previousSet, highlight]),
      );
    }
  }

  function handleReviewInput(value: string) {
    setIsTextareaValid(true);
    if (value.length === 0) {
      setIsTextareaValid(false);
      setReview("");
    } else {
      setReview(value);
    }
  }

  function closeReviewCard() {
    setReview("");
    setIsTextareaValid(true);
    setCurrentStep("STEP_ONE");
    setSelectedExperienceType("angry");
    setSelectedHighlights(new Set());
    setShowHighlights(false);
    setIsAnonymous(false);
    dispatch(fetchReviewCardStateRequest(false));
  }

  return (
    <div
      className={`review-popup w-full h-full fixed z-50 ${
        reviewPopupState ? "flex" : "hidden"
      } items-center justify-center top-0 left-0 right-0 bottom-0 bg-drop-grey/20 backdrop-blur-md`}
    >
      <motion.div
        animate={reviewPopupState ? "show" : "hidden"}
        variants={reviewPopupVariants}
        className="relative rounded-xl bg-drop-white w-[30rem] py-5 px-6 overflow-hidden flex flex-col"
      >
        <div
          className={`items-center justify-between ${
            currentStep === "STEP_THREE" ? "hidden" : "flex"
          }`}
        >
          <div className="toggle-switch items-center space-x-3 flex">
            <p className="text-sm font-semibold text-drop-grey ">
              Post Anonymously
            </p>
            <Switch
              checked={isAnonymous}
              onColor="#525298"
              checkedIcon={false}
              uncheckedIcon={false}
              height={25}
              width={47}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
          </div>
          <ModalCloseButton ClickHandler={() => closeReviewCard()} />
        </div>
        {/* Content */}
        <div className="w-full flex flex-col items-center mt-4">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src={isAnonymous ? AnonymousPlaceholderImage : UserReviewImage}
            alt=""
          />
          <p className="mt-2 text-2xl font-semibold text-drop-primary">
            {isAnonymous ? "Anonymous User" : "Floyd Miles"}
          </p>
          <motion.div
            animate={currentStep === "STEP_ONE" ? "visible" : "hidden"}
            variants={experienceContentVariants}
            className="experience-section w-full mt-6"
          >
            <p className="text-center text-drop-grey mb-4 font-semibold">
              How was your experience?
            </p>
            <div className="flex items-center justify-between">
              <motion.button
                onClick={() => HighlightsHandler("angry")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="emotion angry"
                type="button"
                style={{
                  backgroundImage: `url(${AngryIconSvg})`,
                }}
                className="circle-1 flex bg-cover items-center justify-center w-24 h-24 rounded-full"
              />
              <motion.button
                onClick={() => HighlightsHandler("sad")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="emotion angry"
                type="button"
                style={{
                  backgroundImage: `url(${SadFaceSvg})`,
                }}
                className="circle-1 flex bg-cover items-center justify-center w-24 h-24 rounded-full"
              />
              <motion.button
                onClick={() => HighlightsHandler("normal")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="emotion angry"
                type="button"
                style={{
                  backgroundImage: `url(${GrinningFaceSvg})`,
                }}
                className="circle-1 flex bg-cover items-center justify-center w-24 h-24 rounded-full"
              />
              <motion.button
                onClick={() => HighlightsHandler("excellent")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="emotion angry"
                type="button"
                style={{
                  backgroundImage: `url(${HeartFaceSvg})`,
                }}
                className="circle-1 flex bg-cover items-center justify-center w-24 h-24 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            animate={showHighlights ? "show" : "hidden"}
            variants={highlightVariants}
            className="experience-section w-full mt-6"
          >
            <p className="text-center text-drop-grey mb-4 font-semibold">
              Highlights
            </p>

            <motion.div className="highlights-section flex flex-wrap">
              {visibleHighlights &&
                visibleHighlights.map(({ id, highlight }) => (
                  <Highlight
                    key={id}
                    ClickHandler={() => highlightsHandler(highlight)}
                    highlight={highlight}
                    type={selectedExperienceType}
                    extraTailwindCss="mt-2 mr-2"
                  />
                ))}
            </motion.div>
            <motion.div
              animate={
                selectedHighlights && selectedHighlights.size > 0
                  ? "show"
                  : "hidden"
              }
              variants={nextButtonVariants}
              className="w-full mt-6 mb-1 flex items-center justify-center"
            >
              <CommonRoundedButton
                motionDiv
                ClickHandler={() => {
                  setCurrentStep("STEP_TWO");
                  setShowHighlights(false);
                }}
              >
                <i className="bi bi-arrow-right-short text-2xl text-drop-white" />
              </CommonRoundedButton>
            </motion.div>
          </motion.div>
        </div>
        {/* End of Content */}
        {/* Step TWO Review Form */}
        <motion.div
          animate={currentStep === "STEP_TWO" ? "show" : "hidden"}
          variants={reviewWriteContentVariants}
          className="w-full flex flex-col items-center mt-4"
        >
          <p className="text-center text-drop-grey mb-4 font-semibold">
            Write your review?
          </p>
          <form className="w-full">
            <textarea
              value={review}
              onChange={(e) => handleReviewInput(e.target.value)}
              cols={30}
              rows={10}
              placeholder="Write review..."
              className={`rounded-lg bg-drop-textshaded/10 py-4 px-6 w-full ${
                isTextareaValid
                  ? ""
                  : "ring-drop-red ring-2 placeholder:text-drop-red"
              }`}
            />
          </form>
          <div className="flex items-center justify-center space-x-5 mt-5">
            <CommonRoundedButton extraTailwindClasses="bg-drop-red">
              No Thanks
            </CommonRoundedButton>
            <CommonRoundedButton
              ClickHandler={() => setCurrentStep("STEP_THREE")}
            >
              Post
            </CommonRoundedButton>
          </div>
        </motion.div>
        {/* End of Step TWO Review Form */}
        {/* Step THREE: Stars */}
        <motion.div
          animate={currentStep === "STEP_THREE" ? "show" : "hidden"}
          variants={starsPopupVariants}
          className="w-full flex flex-col items-center mt-4"
        >
          <p className="text-center text-xl text-drop-grey mb-4 font-semibold">
            Thank You for your feedback
          </p>
          <motion.div
            animate={currentStep === "STEP_THREE" ? "show" : "hidden"}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.4,
                },
              },
              hidden: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
            }}
            className="flex items-center space-x-5 w-full justify-center mb-4"
          >
            <motion.i
              animate={currentStep === "STEP_THREE" ? "show" : "hidden"}
              variants={singleStarVariants}
              className="bi bi-star-fill text-5xl text-drop-gold"
            />
            <motion.i
              animate={currentStep === "STEP_THREE" ? "show" : "hidden"}
              variants={singleStarVariants}
              className="bi bi-star-fill text-5xl text-drop-gold"
            />
            <motion.i
              animate={currentStep === "STEP_THREE" ? "show" : "hidden"}
              variants={singleStarVariants}
              className="bi bi-star-fill text-5xl text-drop-gold"
            />
            <motion.i
              animate={currentStep === "STEP_THREE" ? "show" : "hidden"}
              variants={singleStarVariants}
              className="bi bi-star-fill text-5xl text-drop-gold"
            />
            <motion.i
              animate={currentStep === "STEP_THREE" ? "show" : "hidden"}
              variants={singleStarVariants}
              className="bi bi-star-fill text-5xl text-drop-gold"
            />
          </motion.div>
        </motion.div>
        {/* End of Step THREE: Stars */}
      </motion.div>
    </div>
  );
}

export default ReviewForm;
