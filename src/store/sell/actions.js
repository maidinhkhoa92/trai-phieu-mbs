const actions = {
  SELL_LIST: 'SELL_LIST',
  SELL_LIST_GET: 'SELL_LIST_GET',
  SELL_FLOW: 'SELL_FLOW',
  SELL_FLOW_GET: 'SELL_FLOW_GET',
  SELL_INFO: 'SELL_INFO',
  SELL_INFO_GET: 'SELL_FLOW_GET',
  SELL_LOADING: 'SELL_LOADING',
  SELL_ERROR: 'SELL_ERROR',
  get: params => ({
    type: actions.SELL_LIST_GET,
    params
  }),
  getFlow: params => ({
    type: actions.SELL_FLOW_GET,
    params
  }),
  getInfo: params => ({
    type: actions.SELL_INFO_GET,
    params
  })
};
export default actions;
