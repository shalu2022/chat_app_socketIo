import axiosInstance from './axiosInstance';
class userService {
    async userRegister(userDetails){
        try{
            const response = await axiosInstance.post(`/register`, userDetails);
            return response
        } catch (err) {
            throw err.response;
        }
    }

    async userLogin(userDetails) {
        try {
            const response = await axiosInstance.post(`/login`, userDetails);
            return response.data
        } catch (err) {
            throw err.data.message;
        }
    }
}

export default new userService();