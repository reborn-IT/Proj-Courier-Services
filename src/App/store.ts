import { configureStore } from '@reduxjs/toolkit';
import reducer from '../Features/Reducers/FillterReducer';

export const store = configureStore({ reducer });
