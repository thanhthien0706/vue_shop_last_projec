import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../configs/firebase.js'

const FirebaseService = {
    register: async(email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (!res) throw new Error("Could not create a new user")
            return res
        } catch (err) {
            console.log(err.message)
        }
    }
}

export default FirebaseService;