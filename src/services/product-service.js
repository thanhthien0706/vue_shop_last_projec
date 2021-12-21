import axios from "axios";

const ProductService = {
    products: () => {
        const res = axios.get('products')
        console.log(res);
    }
}

export default ProductService;