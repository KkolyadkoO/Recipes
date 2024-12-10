import {observer} from "mobx-react-lite";
import './styles.css';

interface Props {
    step: number,
    text: string,
    imageUrl: string,
}

const InstructionStep = ({step, text, imageUrl}:Props) => {
    return (
        <div className="instructionStep__container">
            <div className="instructionStep__imageContainer">
                <img src={imageUrl} alt="step Img"/>
            </div>
            <div className="instructionStep__info">
                <p className="instructionStep__step">Шаг {step}</p>
                <p className="instructionStep__text">{text}</p>
            </div>
        </div>
    );
}
export default observer(InstructionStep);