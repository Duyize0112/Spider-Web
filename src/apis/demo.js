import axios from 'axios';

export const getUserId=(params)=>{
    return axios.post('./useID',params)
}

axios.get('/user?ID=12345')

export const getUseInfo=(params)=>{
    return axios.post('/user',{
        firstName:'Fred',
        lastName:'Flintstone'
    })
}