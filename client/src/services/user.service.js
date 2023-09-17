import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_BASE_URL}`

class userService {
    async userRegister(userDetails){
        try{
            const response = await axios.post(`${baseUrl}/register`, userDetails);
            return response
        } catch (err) {
            throw err.response;
        }
    }

    async userLogin(userDetails) {
        try {
            const response = await axios.post(`${baseUrl}/login`, userDetails);
            return response.data
        } catch (err) {
            throw err.data.message;
        }
    }
}

export default new userService();