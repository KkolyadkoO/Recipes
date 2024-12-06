import {observer} from "mobx-react-lite";
import './styles.css';
interface Props {
    text: string;
}

const TitleComponent = ({text}:Props) => {
    return (
        <div className="titleWrapper">
            <div className="titleComponent">{text}</div>
        </div>
    );
}

export default observer(TitleComponent);