const actions = {
  BUY: 'BUY',
  BUY_GET: 'BUY_GET',
  BUY_CONTRACT: 'BUY_CONTRACT',
  BUY_GET_CONTRACT: 'BUY_GET_CONTRACT',
  BUY_FLOW: 'BUY_FLOW',
  BUY_FLOW_CASH: 'BUY_FLOW_CASH',
  BUY_FLOW_GET: 'BUY_FLOW_GET',
  BUY_INFO: 'BUY_INFO',
  BUY_INFO_GET: 'BUY_INFO_GET',
  BUY_BOOK: 'BUY_BOOK',
  BUY_UPDATE: 'BUY_UPDATE',
  BUY_APPROVE: 'BUY_APPROVE',
  BUY_PAYMENT_LINK: 'BUY_PAYMENT_LINK',
  BUY_VERIFY_RESULT: 'BUY_VERIFY_RESULT',
  BUY_LOADING: 'BUY_LOADING',
  BUY_FLOW_LOADING: 'BUY_FLOW_LOADING',
  BUY_ERROR: 'BUY_ERROR',
  CLEAR_BUY_ERROR: 'CLEAR_BUY_ERROR',
  getBuy: params => ({
    type: actions.BUY_GET,
    params
  }),
  getFlow: params => ({
    type: actions.BUY_FLOW_GET,
    params
  }),
  getInfo: params => ({
    type: actions.BUY_INFO_GET,
    params
  }),
  update: params => ({
    type: actions.BUY_UPDATE,
    params
  }),
  getContract: () => ({
    type: actions.BUY_GET_CONTRACT
  }),
  approve: () => ({
    type: actions.BUY_PAYMENT_LINK_REQUEST
  }),
  verifyResult: params => ({
    type: actions.BUY_VERIFY_RESULT,
    params
  }),
  clearError: () => ({
    type: actions.CLEAR_BUY_ERROR
  })
};
export default actions;
