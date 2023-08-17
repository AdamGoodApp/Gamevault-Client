import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DownloadState = {
  percentage: number;
  bytesLoaded: number;
  finished?: boolean;
  fileSize: number;
  fileName: string;
};

const initialState = {
  percentage: 0,
  bytesLoaded: 0,
  finished: false,
  fileSize: 0,
  fileName: "",
} as DownloadState;

export const download = createSlice({
  name: "download",
  initialState,
  reducers: {
    reset: () => initialState,
    setPercentage: (state, action: PayloadAction<number>) => {
      state.percentage = action.payload;
    },
    setBytesLoaded: (state, action: PayloadAction<number>) => {
      state.bytesLoaded = action.payload;
    },
    setDownloadFinished: (state, action: PayloadAction<boolean>) => {
      state.finished = action.payload;
    },
    setFileSize: (state, action: PayloadAction<number>) => {
      state.fileSize = action.payload;
    },
    setFileName: (state, action: PayloadAction<string>) => {
      state.fileName = action.payload;
    },
  },
});

export const {
  setPercentage,
  setBytesLoaded,
  setDownloadFinished,
  setFileSize,
  setFileName,
  reset,
} = download.actions;
export default download.reducer;
