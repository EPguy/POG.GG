import axios from 'axios';
const address = "http://localhost:8080";
export function getPastMatch() {
    return axios.get(address+"/pastMatch")
}