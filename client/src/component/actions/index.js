import {takeLatest} from 'redux-saga';
import {call,put} from 'redux-saga/effects';

import streams from '../../apis/streams';
import history from '../../history';
import {CREATE_STREAM,
        FETCH_STREAM,
        FETCH_STREAMS,
        DELETE_STREAM,
        EDIT_STREAM
        } from './type';
//action creator to create single post to api server to post a stream
// export const CreateStream =(formValues)=>
//     async (dispatch)=>{
//         const response =await streams.post('/streams',formValues);
//         // console.log('response from actions create stream ', response.data);
//         dispatch({type:CREATE_STREAM,payload:response.data});
//         history.push('/')
//     }

//action creator to fetch all streams 
export const fetchStreams =()=>{
    return {
        type:'FETCH_STREAMS',
    }
}

// action creator to fetch a single post
export const fetchStream=(id)=>{
    return{
       type:'FETCH_STREAM_SAGA',
       id
    }
}

//action creator to edit stream 
export const editStream =(id,formValues)=>{
    return {
        type:'EDIT_STREAM_SAGA',
        id,
        formValues,
        
    }
    
}


// export const fetchStreamsSuccess = payload => {
//     console.log('action creator fetch stream success payload ', payload);
//     return  {
//                 type: 'FETCH_STREAMS',
//                 payload
//             }    
// };


// action creator to fetch a single post
// export const fetchStream=(id)=>{
//     return async (dispatch)=>{
//         const response=await streams.get(`/streams/${id}`);
//         dispatch({type:FETCH_STREAM,payload:response.data})
//     }
// }

//action creator to edit stream 

// export const editStream =(id,formValues)=>{
//     return async (dispatch)=>{
//         const response= await streams.patch(`/streams/${id}`,formValues);
//         dispatch({type:EDIT_STREAM,payload:response.data})
//         history.push('/')
//     }
// }

//action creator to delete stream

// export const deleteStream=(id)=>{
//     return async (dispatch)=>{
//         await streams.delete(`/streams/${id}`);
//         dispatch({type:DELETE_STREAM,payload:id})
//     }
// }

