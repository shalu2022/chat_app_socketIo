import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BASE_URL}`;
// console.log()
class roomService {
  async getAllRooms() {
    try {
      const response = await axios.get(`${baseUrl}/getAllRooms`);
      return response;
    } catch (err) {
      throw err.message;
    }
  }
  async addRoom(payload) {
    try {
      const response = await axios.post(`${baseUrl}/addRoom`, payload);
      return response;
    } catch (err) {
      throw err.message;
    }
  }
}

export default new roomService();
