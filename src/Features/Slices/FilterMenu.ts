import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TPayload = {
    filterMenuOpened: boolean;
    SaveFilterModalOpened: boolean;
}

const initialState = {
  filterMenuOpened: false,
  SaveFilterModalOpened: false,
};

const FilterMenuSlice = createSlice({
  name: 'FilterMenuOpen',
  initialState,
  reducers: {
    changeFilterMenuState: (state, { payload }: PayloadAction<TPayload>) => {
      // eslint-disable-next-line no-param-reassign
      state.filterMenuOpened = payload.filterMenuOpened;
    },
    // eslint-disable-next-line max-len
    changeSaveFilterModalState: (state, { payload }: PayloadAction<TPayload>) => {
      // eslint-disable-next-line no-param-reassign
      state.SaveFilterModalOpened = payload.SaveFilterModalOpened;
    },
  },
});

export const FilterMenuReducer = FilterMenuSlice.reducer;
export const {
  changeFilterMenuState,
  changeSaveFilterModalState,
} = FilterMenuSlice.actions;
