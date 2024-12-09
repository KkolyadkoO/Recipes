import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import HomePage from "../pages/Home";
import RecipesPage from "../pages/RecipesPage";
import RecipePage from "../pages/RecipePage";
import LoginPage from "../pages/LoginPage";




const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}> </Route>
                <Route path="/recipes" element={<RecipesPage/>}> </Route>
                <Route path="/recipe" element={<RecipePage/>}> </Route>
                <Route path="/login" element={<LoginPage/>}> </Route>
            </Routes>
        </Router>
    );
};

export default observer(AppRoutes);