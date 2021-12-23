import axios from "axios";

const ProductService = {
    products: async() => {
        const res = await axios.get('products')
        if (res.status === 200) {
            return res.data;
        }
        return false;
    }
}

export default ProductService;