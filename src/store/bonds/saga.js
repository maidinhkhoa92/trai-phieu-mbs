import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { list, detail } from 'services/bonds';
import { accountProfile, getToken } from 'store/selectors';
import Error from 'utils/error';
import history from 'utils/history';
import { errorActions } from 'store/actions';

export function* bondsList() {
  yield takeEvery(actions.BONDS_LIST, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      // Set condition
      if (profile.isExist === 0) {
        params.userId = null;
      }
      const res = yield list(params, token);

      if (res.status === 200) {
        // handle request
        if (res.data.result === 0 && res.data.data !== null) {
          yield put({ type: actions.BONDS, list: res.data.data.data });
        } else {
          yield put({
            type: errorActions.ERROR,
            error: { message: Error[res.data.result], status: true }
          });
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: res.data.message, status: true }
        });
        yield history.push({ pathname: '/' });
      }

      yield put({ type: actions.BONDS_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export function* bondsGet() {
  yield takeEvery(actions.BONDS_GET, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING, loading: true });

      // get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      // Set condition
      if (profile.isExist === 0) {
        params.userId = null;
      }
      const res = yield detail(params, token);

      // handle request
      if (res.status === 200) {
        if (res.data.result === 0 && res.data.data !== null) {
          yield put({ type: actions.BONDS_DETAIL, detail: res.data.data });
        } else {
          yield put({
            type: errorActions.ERROR,
            error: { message: Error[res.data.result], status: true }
          });
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: res.data.message, status: true }
        });
        yield history.push({ pathname: '/' });
      }

      yield put({ type: actions.BONDS_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}
export default function* rootSaga() {
  yield all([fork(bondsList), fork(bondsGet)]);
}
