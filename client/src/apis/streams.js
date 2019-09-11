import axios from 'axios';
export default axios.create({
    baseURL:'http://localhost:3001'
});

// const root = 'http://localhost:3001';

// export const apiFetchStreams = async () => {
//     console.log('api fetch streams entered');
//     const response = await axios.get(`${root}/streams`);
//     console.log('api fetch streams response', response);
//     return response;
// }