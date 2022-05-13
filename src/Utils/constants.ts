// Api Error Messages

export const networkError = 'Network not responed';
export const networkSettingError = 'Something went wrong';

export type TEXT = 'text';
export type NUMBER = 'number';
export type LEFT = 'start';
export type RIGHT = 'end';
export type CENTER = 'center';
export type RESULTCARD = 'resultcard';
export type FILTERLOGCARD = 'filterlogcard';
export type HIGH_TO_LOW = 'High to Low';
export type LOW_TO_HIGH = 'Low to High';
export type BEST_MATCH = 'Best Match';
export type NORMAL = 'normal';
export type SCROLLING = 'scrolling';
export type SCROLLING_DOWN = 'scrolling_down'
export type SCROLLING_UP = 'scrolling_up'

export type InputTypes =
  | TEXT
  | NUMBER;

export type NavBarStatusTypes =
  | NORMAL
  | SCROLLING;

export type PostionTypes =
 | LEFT
 | RIGHT
 | CENTER;

export type PaginatedCardTypes =
 | RESULTCARD
 | FILTERLOGCARD

export type ScrollingDirections =
  | SCROLLING_DOWN
  | SCROLLING_UP
