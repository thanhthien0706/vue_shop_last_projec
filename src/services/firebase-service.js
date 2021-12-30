import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../configs/firebase.js'

const FirebaseService = {
    register: async(email, password) => {
        let res
        try {
            res = await createUserWithEmailAndPassword(auth, email, password)
            if (!res) throw new Error("Could not create a new user")
            return res
        } catch (err) {
            if (err) {
                res = false
            }
        }
        return res
    }
}

export default FirebaseService;