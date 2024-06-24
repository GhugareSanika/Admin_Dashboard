"use client"

import { title } from "process";
import styles from "./sidebar.module.css";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink"; // Ensure this file exists and path is correct

import {
    MdDashboard,
    MdSupervisedUserCircle, // corrected icon name
    MdShoppingBag,
    MdAttachMoney,
    MdWork, // corrected icon name
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout, // corrected icon name
} from "react-icons/md";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users", // corrected typo from tile to title
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions", // corrected typo from Trasactions to Transactions
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports", // corrected typo from tile to title
                path: "/dashboard/reports",
                icon: <MdAnalytics /> // corrected icon
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help", // corrected typo from tile to title
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            },
        ]
    }
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/avatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Sanika Ghugare</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
