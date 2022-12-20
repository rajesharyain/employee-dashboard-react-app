import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

//const headers = {{}}
const request = (url: string, method:string, data: any= {}) => {
  
  return  axios({
        url: url,
        method: method,
        data: data,
  
    })
}

export const get = async (url: string) => await request(url, 'get');
export const post = async (url: string, data: any) => await request(url, 'post', data);
export const http_delete = async(url:string) => await request(url, 'delete');
