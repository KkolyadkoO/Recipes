import {observer} from "mobx-react-lite";
import Header from "../../Header";
import React from "react";
import Footer from "../../Footer";
import DropdownFilters from "../../DropdownFilters";
import RecipeCard from "../../RecipeCard";
import './styles.css';


const RecipesPage = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <div className='content'>
                <DropdownFilters/>
                <div className='recipesPage__cards'>
                    <RecipeCard
                        text={"ьадылрв овыыло ваоыва воатыловалоыв ыловтлы вмтоыбт тмоытвм мтывмо моывталоыврдмывтмдамымтвыдамм ам рда мдвра мд рм мдышрм дм рдшм рдышмрфшырвмдшы вмы вмы ршвм дыв мыв мывм рдышмр ыдвшрм ы"}
                        title={"Блюдо 1"}
                        time={40}
                        image={"/images/aboutImage.png"}
                    cal = {300}
                    />
                    <RecipeCard
                        text={"ьадылрв овыыло ваоыва воатыловалоыв ыловтлы вмтоыбт тмоытвм мтывмо моывталоыврдмывтмдамымтвыдамм ам рда мдвра мд рм мдышрм дм рдшм рдышмрфшырвмдшы вмы вмы ршвм дыв мыв мывм рдышмр ыдвшрм ы"}
                        title={"Блюдо 2"}
                        time={40}
                        image={"/images/aboutImage.png"}
                        cal = {300}/>
                    <RecipeCard
                        text={"ьадылрв овыыло ваоыва воатыловалоыв ыловтлы вмтоыбт тмоытвм мтывмо моывталоыврдмывтмдамымтвыдамм ам рда мдвра мд рм мдышрм дм рдшм рдышмрфшырвмдшы вмы вмы ршвм дыв мыв мывм рдышмр ыдвшрм ы"}
                        title={"Блюдо 3"}
                        time={40}
                        image={"/images/aboutImage.png"}
                        cal = {3000}/>
                    <RecipeCard
                        text={"ьадылрв овыыло ваоыва воатыловалоыв ыловтлы вмтоыбт тмоытвм мтывмо моывталоыврдмывтмдамымтвыдамм ам рда мдвра мд рм мдышрм дм рдшм рдышмрфшырвмдшы вмы вмы ршвм дыв мыв мывм рдышмр ыдвшрм ы"}
                        title={"Блюдо 4"}
                        time={40}
                        image={"/images/aboutImage.png"}
                        cal = {300}/>
                    <RecipeCard
                        text={"ьадылрв овыыло ваоыва воатыловалоыв ыловтлы вмтоыбт тмоытвм мтывмо моывталоыврдмывтмдамымтвыдамм ам рда мдвра мд рм мдышрм дм рдшм рдышмрфшырвмдшы вмы вмы ршвм дыв мыв мывм рдышмр ыдвшрм ы"}
                        title={"Блюдо 5"}
                        time={40}
                        image={"/images/aboutImage.png"}
                        cal = {300}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default observer(RecipesPage);