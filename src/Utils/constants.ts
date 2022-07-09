// Api Error Messages

export const networkError = "Network not responed";
export const networkSettingError = "Something went wrong";

export type TEXT = "text";
export type NUMBER = "number";
export type PASSWORD = "password";
export type TEL = "tel";
export type LEFT = "start";
export type RIGHT = "end";
export type CENTER = "center";
export type RESULTCARD = "resultcard";
export type FILTERLOGCARD = "filterlogcard";
export type HIGHTOLOW = "High to Low";
export type LOWTOHIGH = "Low to High";
export type BESTMATCH = "Best Match";
export type NORMAL = "normal";
export type SCROLLING = "scrolling";
export type SCROLLINGDOWN = "scrolling_down";
export type SCROLLINGUP = "scrolling_up";

export type ANGRY = "angry";
export type SAD = "sad";
export type EXCELLENT = "excellent";

export type STEPONE = "STEP_ONE";
export type STEPTWO = "STEP_TWO";
export type STEPTHREE = "STEP_THREE";

export type ReviewFormSteps = STEPONE | STEPTWO | STEPTHREE;

export type ExperienceTypes = ANGRY | SAD | NORMAL | EXCELLENT;

export type InputTypes = TEXT | NUMBER | TEL | PASSWORD;

export type NavBarStatusTypes = NORMAL | SCROLLING;

export type PostionTypes = LEFT | RIGHT | CENTER;

export type PaginatedCardTypes = RESULTCARD | FILTERLOGCARD;

export type ScrollingDirections = SCROLLINGDOWN | SCROLLINGUP;
