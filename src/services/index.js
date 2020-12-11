import axios from 'axios';

class MonitorServices {
    static async fetchStatus() {
        const url = process.env.REACT_APP_API_URL;
        const request = await axios.get(url);
        if (request.status === 200) {
            return request.data
        }
    }

    static async sendEmailNotification() {
        const url = process.env.REACT_APP_EMAIL_URL;
        const payload = {
            "email":"diana.sepulveda@payclip.com",
            "sendEmail":true
        }
        const request = await axios.post(url, payload);
        if (request.status === 200) {
            return request.data
        }
    }
}

export default MonitorServices;