const { default: Link } = require("next/link")
import styles from './menuLink.module.css'

const MenuLink= ({item})=>{
    return (
        <Link href={item.path} className={styles.container}>
            {item.icon}
            {item.title}
        </Link>
    )
}
export default MenuLink;