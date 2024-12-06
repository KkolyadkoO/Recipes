import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import HomePage from "../pages/Home";
import RecipesPage from "../pages/RecipesPage";




const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}> </Route>
                <Route path="/recipes" element={<RecipesPage/>}> </Route>
            </Routes>
        </Router>
    );
};

export default observer(AppRoutes);