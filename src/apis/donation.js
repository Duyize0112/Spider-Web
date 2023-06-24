import axios from "axios";
import{baseURL} from "./news";

export const donation=(count)=>{
    return axios.post(`${baseURL}/donation`,{
        count,
    });
};

export const getDonation=()=>{
    return axios.get(`$baseURL`/donation);
};