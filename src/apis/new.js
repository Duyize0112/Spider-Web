import axios from "axios";

export const baseURL="http://1ocalhost:3001";

export const getNewsById=(id)=>{
    return axios.get(`${baseURL}/news/${id}`);
};
export const getNewsList =async()=>{
    const{data}=await axios.get(`${baseURL}/news`);

    const imageList=["/images/2.jpg","/images/3.jpg"];

    return data.map((i,index)=>({
        ...i,
        image:imageList[index],
    }));
};
