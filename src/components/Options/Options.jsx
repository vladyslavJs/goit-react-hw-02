import css from './Options.module.css'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BsEmojiNeutral } from "react-icons/bs";
import { GrPowerReset} from "react-icons/gr";

const Options = ({ onUpdate, onReset, total }) => {
    return (
        <>
            <button className={css.btn} onClick={() => onUpdate('good')}>Good     <AiOutlineLike /> </button>
            <button className={css.btn} onClick={() => onUpdate('neutral')}>Neutral <BsEmojiNeutral /> </button>
            <button className={css.btn} onClick={() => onUpdate('bad')}>Bad <AiOutlineDislike /> </button>
            {total > 0 && (
                <button className={css.btnReset} onClick={onReset}>Reset <GrPowerReset/> </button>
            )}   
        </>
    );
};

export default Options;



