import css from './Description.module.css';
import { SiCoffeescript } from "react-icons/si";

const Description = () => {
    return (
        <>
            <h1 className={css.title} >Sip Happens Café <SiCoffeescript/></h1>
            <p className={css.description} >«Please leave your feedback about our service by selecting one of the options below.»
            </p>
        </>
    )
}

export default Description;