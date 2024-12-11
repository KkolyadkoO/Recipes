import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import HomePage from "../pages/Home";
import RecipesPage from "../pages/RecipesPage";
import RecipePage from "../pages/RecipePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyRecipesPage from "../pages/MyRecipesPage";




const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}> </Route>
                <Route path="/recipes" element={<RecipesPage/>}> </Route>
                <Route path="/recipe" element={<RecipePage/>}> </Route>
                <Route path="/login" element={<LoginPage/>}> </Route>
                <Route path="/register" element={<RegisterPage/>}> </Route>
                <Route path="/myrecipes" element={<MyRecipesPage/>}> </Route>
            </Routes>
        </Router>
    );
};

export default observer(AppRoutes);