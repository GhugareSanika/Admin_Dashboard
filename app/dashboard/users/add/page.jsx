import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" required />

                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected>Is Admin ?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={false} selected>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea 
                  name="address"
                  id="address"
                  rows="10"
                  placeholder="Address"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage

// "use client"
// import React, { useState } from 'react';
// import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'; // Adjust the path as necessary

// const AddUserPage = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         phone: '',
//         isAdmin: false,
//         isActive: false,
//         address: '',
//     });

//     const handleChange = (event) => {
//         const { name, value, type, checked } = event.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission with formData
//         console.log(formData);
//     };

//     return (
//         <div className={styles.container}>
//             <form onSubmit={handleSubmit} className={styles.form}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="tel"
//                     placeholder="Phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                 />

//                 <select
//                     name="isAdmin"
//                     id="isAdmin"
//                     value={formData.isAdmin}
//                     onChange={handleChange}
//                 >
//                     <option value={false}>Is Admin ?</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>

//                 <select
//                     name="isActive"
//                     id="isActive"
//                     value={formData.isActive}
//                     onChange={handleChange}
//                 >
//                     <option value={false}>Is Active?</option>
//                     <option value={true}>Yes</option>
//                     <option value={false}>No</option>
//                 </select>

//                 <textarea
//                     name="address"
//                     id="address"
//                     rows="10"
//                     placeholder="Address"
//                     value={formData.address}
//                     onChange={handleChange}
//                 ></textarea>

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default AddUserPage;

