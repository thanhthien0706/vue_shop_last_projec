import axios from "axios";

export default {

    // đăng kí
    async register(user) {
        // const res = await axios.post('register', user);
        const res = await axios.post('register', {
            email: user.email,

        });
    }
}