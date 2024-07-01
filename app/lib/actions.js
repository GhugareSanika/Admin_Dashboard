// "use server"

// import { revalidatePath } from "next/cache";
// import { User, Product } from "./models";
// import { connectToDB } from "./utils";
// import { redirect } from "next/navigation";
// import bcrypt from "bcrypt";

// export const addUser = async (formData) => {
//     const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

//     try {
//         connectToDB();
//         const salt = await bcrypt.genSalt(10);
//         const hashPassword = await bcrypt.hash(password, salt);

//         const newUser = new User({
//             username,
//             email,
//             password: hashPassword,
//             phone,
//             address,
//             isAdmin,
//             isActive
//         });

//         await newUser.save();
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to create user");
//     }

//     revalidatePath("/dashboard/users");
//     redirect("/dashboard/users");
// };

// export const addProduct = async (formData) => {
//     const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

//     try {
//         connectToDB();

//         const newProduct = new Product({
//             title,
//             desc,
//             price,
//             stock,
//             color,
//             size
//         });

//         await newProduct.save();
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to create product");  // Corrected error message
//     }

//     revalidatePath("/dashboard/products");
//     redirect("/dashboard/products");
// };

// export const deleteProduct = async (formData) => {
//     const {id} = Object.fromEntries(formData);

//     try {
//         connectToDB();

//         const newProduct = new Product(id);

//         await Product.findByIdAndDelete(id);
//     } catch (err) {
//         console.log(err);
//         //throw new Error("Failed to delete product");  // Corrected error message
//     }

//     revalidatePath("/dashboard/products");
// };



"use server"

import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        await connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashPassword,
            phone,
            address, 
            isAdmin,
            isActive
        });

        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create user");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
    const { id,username, email, password, phone, address, isAdmin, isActive } = 
    Object.fromEntries(formData);

    try {
        await connectToDB();

        const updateFields = {
            username,
            email,
            password,
            address,
            isAdmin,
            isActive
        }

        Object.keys(updateFields).forEach(
        (key)=>
            (updateFields[key]==="" || undefined) && delete updateFields [key]
        );

        await User.findByIdAndUpdate(id,updateFields)
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user");
    }
 
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};


export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size
        });

        await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create product");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };



export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData); // Ensure the id field is passed in the formData

    if (!id) {
        console.log("No user ID provided");
        throw new Error("User ID is required");
    }

    try {
        await connectToDB();

        const result = await User.findByIdAndDelete(id); // Directly use the id for deletion
        if (!result) {
            console.log(`No user found with ID: ${id}`);
            throw new Error("User not found");
        }
    } catch (err) {
        console.log(`Error deleting user with ID: ${id}`, err);
        throw new Error("Failed to delete user");
    }

    revalidatePath("/dashboard/users");
};


export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData); // Ensure the id field is passed in the formData

    if (!id) {
        console.log("No product ID provided");
        throw new Error("Product ID is required");
    }

    try {
        await connectToDB();

        const result = await Product.findByIdAndDelete(id); // Directly use the id for deletion
        if (!result) {
            console.log(`No product found with ID: ${id}`);
            throw new Error("Product not found");
        }
    } catch (err) {
        console.log(`Error deleting product with ID: ${id}`, err);
        throw new Error("Failed to delete product");
    }

    revalidatePath("/dashboard/products");
};
