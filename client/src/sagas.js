
import {all} from 'redux-saga/effects';
import { put, takeEvery ,call} from 'redux-saga/effects';
import streams from './apis/streams';
import history from './history';


//workers sagas 

//fetch all posts saga
  function* getPosts() {
    try {
      const response = yield streams.get('/streams');
      yield put({ type: 'FETCH_STREAMS', payload: response.data });

    } catch (err) {
      console.log(err);
    }
}

//get single post saga
  function* getSinglePosts(action) {
    try {
      console.log(action)
      const {id}=action

      const response = yield streams.get(`/streams/${id}`);
      console.log('saga response.dataaadssdgdga', response.data);
      yield put({ type: 'FETCH_STREAM', payload: response.data });

    } catch (err) {
      console.log(err);
    }
  }

  //edit post saga
  function* editPostSaga(action){
    const {id, formValues}=action;
    console.log('EDIT STREAM SAGA ID AND FORMVALUES ', id, " ", formValues);
    const response = yield streams.patch(`/streams/${id}`,formValues);
    console.log('edit stream saga response ', response);
    yield put({ type: 'EDIT_STREAM', payload: response.data });
    history.push('/');
    
  }


  //watchers sagas

  export default function* rootSaga() {
    yield takeEvery('FETCH_STREAMS', getPosts);
    yield takeEvery('FETCH_STREAM_SAGA', getSinglePosts);
    yield takeEvery('EDIT_STREAM_SAGA', editPostSaga);

  }