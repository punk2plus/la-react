const index = {
  namespace: 'pageB',

  state: {
    title: 'pageB'
  },

  subscriptions: {
    setup({ dispatch, history }: any) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }: any, { call, put }: any) {
      // eslint-disable-line
      yield put({ type: 'save' });
    }
  },

  reducers: {
    save(state: any, action: any) {
      return { ...state, ...action.payload };
    }
  }
};

export default index;
