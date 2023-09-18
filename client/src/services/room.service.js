import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_BASE_URL}`
// console.log()
class roomService {
    async addRoom(payload){
        try{
            // const response = axios(`${baseUrl}/addRoom`, roomDetails)
            // return response
            console.log("room details", payload);
        }catch (err){
            throw err.message
        }
    }
}

export default new roomService();