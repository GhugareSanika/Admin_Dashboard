// import styles from "@/app/ui/login/login.module.css"
// import {authenticate} from "../lib/actions"
// const LoginPage = () =>{
//     return (
//         <div className={styles.container}>
//             <form action={authenticate} className={styles.form}>
//                 <input type="text" placeholder="username" name="username"></input>
//                 <input type="password" placeholder="Password" name="password"></input>
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// }

// export default LoginPage

"use client";

import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../lib/actions";

const LoginPage = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const entries = Object.fromEntries(formData.entries());

        try {
            await authenticate(null, entries);
        } catch (err) {
            console.error("Authentication failed:", err);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder="Username" name="username" required />
                <input type="password" placeholder="Password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
