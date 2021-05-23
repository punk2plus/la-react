import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface stateModel {
  loading: boolean
  error: string | null,
  title: string | null,
  items: any[]
}

const initialState: stateModel = {
  loading: true,
  title: 'pageA',
  error: null,
  items: [],
}

export const getPageA = createAsyncThunk("/", async (jwt: string, thunkAPI) => {
  return null
})

export const pageASlice = createSlice({
  name: "pageA",
  initialState,
  reducers: {},
  extraReducers: {
    [getPageA.pending.type]: (state) => {
      state.loading = true
    },
  },
})
