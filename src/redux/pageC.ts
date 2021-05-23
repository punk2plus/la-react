import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface stateModel {
  loading: boolean
  error: string | null,
  title: string | null,
  items: any[]
}

const initialState: stateModel = {
  loading: true,
  title: 'pageC',
  error: null,
  items: [],
}

export const getPageC = createAsyncThunk("/", async (jwt: string, thunkAPI) => {
  return null
})

export const pageCSlice = createSlice({
  name: "pageB",
  initialState,
  reducers: {},
  extraReducers: {
    [getPageC.pending.type]: (state) => {
      state.loading = true
    },
  },
})
