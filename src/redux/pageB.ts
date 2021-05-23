import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface stateModel {
  loading: boolean
  error: string | null,
  title: string | null,
  items: any[]
}

const initialState: stateModel = {
  loading: true,
  title: 'pageB',
  error: null,
  items: [],
}

export const getPageB = createAsyncThunk("/", async (jwt: string, thunkAPI) => {
  return null
})

export const pageBSlice = createSlice({
  name: "pageB",
  initialState,
  reducers: {},
  extraReducers: {
    [getPageB.pending.type]: (state) => {
      state.loading = true
    },
  },
})
