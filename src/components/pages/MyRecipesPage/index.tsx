import {observer} from "mobx-react-lite";
import Header from "../../Header";
import RecipeCard from "../../RecipeCard";
import Footer from "../../Footer";
import React from "react";
import Filters from "../../Filters";
import './styles.css';


const MyRecipesPage = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <div className='content'>
                <div className='myRecipesPage__title'>
                    <div>Моя книга рецептов</div>
                </div>
                <div className='filters-dropdown visible'>
                    <Filters/>
                </div>
                <div className='myRecipesPage__cards'>
                <RecipeCard
                    text={"ьадылрв овыыло ваоыва воатыловалоыв ыловтлы вмтоыбт тмоытвм мтывмо моывталоыврдмывтмдамымтвыдамм ам рда мдвра мд рм мдышрм дм рдшм рдышмрфшырвмдшы вмы вмы ршвм дыв мыв мывм рдышмр ыдвшрм ы"}
                    title={"Блюдо 1"}
                    time={40}
                    image={"/images/aboutImage.png"}
                    cal = {300}/>
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
                    cal = {300}/>
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

export default observer(MyRecipesPage);