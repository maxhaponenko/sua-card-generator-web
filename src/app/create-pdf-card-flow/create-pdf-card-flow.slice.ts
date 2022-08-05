import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Step {
  Initial = 1,
  InProgress = 2,
  Done = 3,
}
export type Errors = {
  imageNotAdded: boolean;
  textNotAdded: boolean;
  nameNotAdded: boolean;
  unknown: boolean;
};
export type Image = {
  base64: string;
  relativePath: string;
  size: {
    width: number;
    height: number;
  };
};
export type Card = {
  image: Image;
  text: string;
  name: string;
}
type CreatePdfCardFlowState = {
  step: Step;
  errors: Errors;

  card: Card;
};

export const uploadImage = createAsyncThunk(
  "createPdfCardFlow/uploadImage",
  async (_, { rejectWithValue, dispatch }) => {
    console.log("some text here");
    onTextChange("sdasd");
  }
);

const initialState = {} as CreatePdfCardFlowState;
const createPdfCardFlowSlice = createSlice({
  name: "createPdfCardFlow",
  initialState,
  reducers: {
    onTextChange: (state, { payload }: PayloadAction<string>) => {
      state.card.text = payload;
    },
    onNameChange: (state, { payload }: PayloadAction<string>) => {
      state.card.name = payload;
    },
    setImage: (state, { payload }: PayloadAction<Image>) => {
      state.card.image = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadImage.pending, (state, { payload }) => {
      console.log("extraReducer is triggered", state);
    });
  },
});

export const { setImage, onNameChange, onTextChange } = createPdfCardFlowSlice.actions;

export default createPdfCardFlowSlice.reducer;
