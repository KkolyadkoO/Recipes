import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import HomePage from "../pages/Home";




const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}> </Route>
            </Routes>
        </Router>
    );
};

export default observer(AppRoutes);