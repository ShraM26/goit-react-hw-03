// import css from './Contact.module.css'
import { FiUser, FiPhone } from "react-icons/fi";


const Contact = ({name, number}) => {
    return (
        <li>
            <p><FiUser /> {name}</p>
            <p><FiPhone /> {number}</p>
            <button type="button">Delete</button>
        </li>
    );
};

export default Contact;