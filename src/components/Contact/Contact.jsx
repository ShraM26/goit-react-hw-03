 import css from './Contact.module.css'
import { FiUser, FiPhone } from "react-icons/fi";


const Contact = ({name, number, id, onDelete}) => {
    return (
        <li className={css.itemCnt}>
            <p className={css.text}><FiUser className={css.iconU} /> {name}</p>
            <p className={css.text}><FiPhone className={css.iconP} /> {number}</p>
            <button className={css.btnDelete} type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
};

export default Contact;