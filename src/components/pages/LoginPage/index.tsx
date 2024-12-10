import {observer} from "mobx-react-lite";
import Footer from "../../Footer";
import Header from "../../Header";
import LoginForm from "../../forms/LoginForm";
import './styles.css';


const LoginPage = () => {
    return (<div className='wrapper'>
            <Header/>
            <div className='content loginPage__container'>

                <LoginForm/>

            </div>
            <Footer/>
        </div>
    );
}

export default observer(LoginPage);