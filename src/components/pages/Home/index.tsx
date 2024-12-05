import React from "react";
import {observer} from "mobx-react-lite";
import Header from "../../Header";
import Footer from "../../Footer";


const HomePage = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <h1>Main page</h1>
            </div>
            <Footer />
        </div>
    );
};

export default observer(HomePage);