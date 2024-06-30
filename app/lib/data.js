// import {User} from "./models"
// import {connectToDB} from "./utils"
// export const fetchUsers = async () =>{
//     try{
//         await connectToDB();
//         const users = await User.find();
//         return users;
//     }catch(err){
//         console.log(error);
//         throw new Error ("Failed to fetch users")
//     }
// }

import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q,page) => {

    //console.log(q);

    const regex = new RegExp(q,"i");
    const ITEM_PER_PAGE = 2;

    try {
        await connectToDB(); // Ensure the connection is awaited
        const count = await User.find({username: {$regex: regex}}).count();
        const users = await User.find({username:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,users};
    } catch (err) {
        console.error(err);
        //throw new Error("Failed to fetch users");
    }
};

export const fetchProducts = async (q,page) => {

    console.log(q);

    const regex = new RegExp(q,"i");
    const ITEM_PER_PAGE = 2;

    try {
        await connectToDB(); // Ensure the connection is awaited
        const count = await Product.find({title: {$regex: regex}}).count();
        const products = await Product.find({title:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,products};
    } catch (err) {
        console.error(err);
        //throw new Error("Failed to fetch users");
    }
};