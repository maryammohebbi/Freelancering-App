import http from "./httpService";

export function getOtp(data){
    return http.post("/user/get-otp", data).then(({data})=> data.data)
}