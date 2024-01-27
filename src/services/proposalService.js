import http from "./httpService";

export function changeProposalstatusApi({id, data}){
    return http.patch(`/proposal/${id}`, data).then(({data})=> data.data)
}