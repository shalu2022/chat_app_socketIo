import axiosInstance from './axiosInstance';
class roomService {
  async getAllRooms() {
    try {
      const response = await axiosInstance.get('/getAllRooms');
      return response;
    } catch (err) {
      throw err.message;
    }
  }
  async addRoom(payload) {
    try {
      const response = await axiosInstance.post('/addRoom', payload);
      return response;
    } catch (err) {
      throw err.message;
    }
  }
}

export default new roomService();
