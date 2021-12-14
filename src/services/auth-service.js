import axios from "axios";

export default {

    // set token in headers
    initAuthHeader() {
        const token = localStorage.getItem('goShopToken');
        if (token && token !== '') {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            axios.defaults.headers.common['Authorization'] = '';
        }
    },

    // reset 
    async resetAuthHeader() {
        localStorage.setItem('goShopToken', '')
        this.initAuthHeader();
    },

    // đăng kí
    async register(user) {
        // const res = await axios.post('register', user);
        const res = await axios.post('register', {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        });
        if (res.data.code === 200) {
            // console.log('đăng kí thành công');
            return res.data;
        }
    },

    // đăng nhập
    async login(user) {
        const res = await axios.post('login', user);
        if (res.data.code === 200) {
            // console.log('đăng nhập thành công');
            localStorage.setItem('goShopToken', res.data.data.token.access_token)
            this.initAuthHeader();
            // this.me()
            // axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.token.access_token}`;
            return res.data;
        }
    },

    // me
    async me() {
        try {
            const res = await axios.post('me')
            if (res.data.code === 200) {
                console.log("Data token");
            } else {
                this.resetAuthHeader();
            }
            return res.data;
        } catch (e) {
            this.resetAuthHeader();
            console.log("not oke");
        }

    },

    // logout
    async logout() {
        const res = await axios.post('logout')
        console.log(res);
        if (res.data.code === 200) {
            // console.log("Data token");
            localStorage.setItem('goShopToken', '')
            this.resetAuthHeader();
        }
        return res.data;
    },


}