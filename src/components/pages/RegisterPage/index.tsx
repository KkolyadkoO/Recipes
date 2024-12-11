import {observer} from "mobx-react-lite";
import Footer from "../../Footer";
import Header from "../../Header";
import LoginForm from "../../forms/LoginForm";
import './styles.css';
import RegisterForm from "../../forms/RegisterForm";


const RegisterPage = () => {
    return (<div className='wrapper'>
            <Header/>
            <div className='content registerPage__container'>

                <RegisterForm/>

            </div>
            <Footer/>
        </div>
    );
}

export default observer(RegisterPage);