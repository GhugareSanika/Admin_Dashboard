import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image';

const singleProductPage = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/Noproduct.webp" alt="" fill/>
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="iphone"/>
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$799"/>
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="10"/>
                    <label>Color</label>
                    <input type="phone" name="color" placeholder="black"/>
                    <label>Size</label>
                    <input type="text" name="size" placeholder="India"/>
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea 
                        name="desc"
                        id="desc"
                        rows="2"
                        placeholder="description"
                    ></textarea>
                    <button>Update</button>
                </form>  
            </div>
      </div>
    )
}

export default singleProductPage;