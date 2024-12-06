import './styles.css';
import {observer} from "mobx-react-lite";

const SubscriptionForm = () => {
    return (
        <div className="subscriptionFormContainer">
            <p className="formTitle">Хотите получать лучшие рецепты каждый день?</p>
            <p className="formDescription">Подпишитесь на нашу рассылку и получите доступ к эксклюзивным рецептам,
                советам от шеф-поваров и кулинарным хитростям.</p>
            <div className="subscriptionForm">
                <form className="subscriptionFormBlock1">
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="email" placeholder="Ваша электронная почта"/>
                    <input type="tel" placeholder="Ваш телефон"/>
                    <button>Подписаться</button>
                </form>
                <div className="subscriptionFormBlock2">
                    <p>Только проверенные и вкусные рецепты.</p>
                    <p>Идеи для любого случая: от ужина до праздничного стола.</p>
                    <p>Эксклюзивные бонусы для подписчиков.</p>
                </div>
            </div>
        </div>
    );
}

export default observer(SubscriptionForm);