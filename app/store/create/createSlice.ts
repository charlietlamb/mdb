import {createSlice} from '@reduxjs/toolkit';

export interface CreateState {
  open: boolean;
  name: string;
  email: string;
  occasion: string | null;
  details: string;
  song: string;
  page: number;
  completed: boolean[];
  next: boolean;
}

const initialState: CreateState = {
  open: false,
  name: '',
  email: '',
  occasion: null,
  details: '',
  song: '',
  page: 0,
  completed: [true, false, true, false, false],
  next: false,
};

const CreateSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setOccasion: (state, action) => {
      state.occasion = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setSong: (state, action) => {
      state.song = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCompleted: (state, action) => {
      state.completed = action.payload;
    },
    setNext: (state, action) => {
      state.next = action.payload;
    },
  },
});

export const {
  setOpen,
  setName,
  setEmail,
  setOccasion,
  setDetails,
  setSong,
  setPage,
  setCompleted,
  setNext,
} = CreateSlice.actions;

export default CreateSlice.reducer;
