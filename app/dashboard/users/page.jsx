// import styles from "@/app/ui/dashboard/users/users.module.css"
// import Search from "@/app/ui/dashboard/search/search"
// import Pagination from "@/app/ui/dashboard/pagination/pagination"
// import Link from "next/link"
// import Image from "next/image";
// import { fetchUsers } from "../../lib/data";

// const UsersPage = async ()=>{
//     const users = await fetchUsers();

//     console.log(users);

//     return (
//         <div className={styles.container}>
//             <div className={styles.top}>
//                 <Search placeholder="Search for a user..."/>
//                 <Link href="/dashboard/users/add">
//                     <button className={styles.addButton}>Add New</button>
//                 </Link>
//             </div>
//             <table className={styles.table}>
//                 <thead>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Created</td>
//                         <td>Role</td>
//                         <td>Status</td>
//                         <td>Action</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user=>{

//                         <tr key={user._id}>
//                             <td>
//                                 <div className={styles.user}>
//                                     <Image 
//                                         src={user.img || "/avatar.png"}
//                                         alt=""
//                                         width={40}
//                                         height={40}
//                                         className={styles.userImage}
//                                     />
//                                     {user.username}
//                                 </div>
//                             </td>
//                             <td>Sanika@gmail.com</td>
//                             <td>27.06.2024</td>
//                             <td>Admin</td>
//                             <td>Active</td>
//                             <td>
//                                 <div className={styles.buttons}>
//                                     <Link href="/dashboard/users/test">
//                                         <button className={`${styles.button} ${styles.view}`}>
//                                             View
//                                         </button>
//                                     </Link>
//                                     <button className={`${styles.button} ${styles.delete}`}>
//                                         Delete
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table> 
//             <Pagination />
//         </div>
//     )
// }


// export default UsersPage

import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "../../lib/data";

const UsersPage = async ({searchParams}) => {

  const q= searchParams?.q || "";
  const page= searchParams?.page|| 1;
  const {count,users} = await fetchUsers(q,page);

  console.log(users);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/avatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};

export default UsersPage;
