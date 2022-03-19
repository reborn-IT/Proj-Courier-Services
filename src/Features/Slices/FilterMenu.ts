import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TPayload = {
    filterMenuOpened: boolean
}

const initialState = {
  filterMenuOpened: false,
};

const FilterMenuSlice = createSlice({
  name: 'FilterMenuOpen',
  initialState,
  reducers: {
    changeFilterMenuState: (state, { payload }: PayloadAction<TPayload>) => {
      // eslint-disable-next-line no-param-reassign
      state.filterMenuOpened = payload.filterMenuOpened;
    },
  },
});

export const FilterMenuReducer = FilterMenuSlice.reducer;
export const { changeFilterMenuState } = FilterMenuSlice.actions;
