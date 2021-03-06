export const accountProfile = state => state.Account.profile;
export const accountStep = state => state.Account.stepData;
export const getToken = state => state.Auth.token;

export const bondsDetail = state => state.Bonds.detail;

export const buyGetParams = state => state.Buy.params;
export const buyGetBook = state => state.Buy.book;
export const buyGetContract = state => state.Buy.contract;
export const buyInfo = state => state.Buy.info;
export const buyVolMin = state => state.Buy.info.buyVolMin;
export const buyVolMax = state => state.Bonds.detail.roomBalance;

export const sellDate = state => state.Sell.date;
export const sellBook = state => state.Sell.book;

export const tradeCode = state => state.Trade.detail.sellContractCode;

export const accountError = state => state.Account.error;
export const authError = state => state.Auth.error;
export const bondsError = state => state.Bonds.error;
export const buyError = state => state.Buy.error;
export const sellError = state => state.Sell.error;
export const tradeError = state => state.Trade.error;
