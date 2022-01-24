import { Switch, Route } from "react-router-dom";
import MainLayout from './layouts/Main'

import MealDetails from './components/mealDetails';

import Areas from './components/home/Areas';
import Categories from './components/home/FoodCategories';
import Ingredients from './components/home/Ingredients';

import AreaCat from './components/filterBy/MealByArea'
import MealCat from './components/filterBy/MealByType'
import IngCat from './components/filterBy/MealByIngredient'

function Routes() {
    return <Switch>
        <Route exact path="/">
            <MainLayout>
                <Route component={Areas}/>
            </MainLayout>
        </Route>
        <Route exact path="/categories">
            <MainLayout>
                <Route component={Categories}/>
            </MainLayout>    
        </Route>
        <Route exact path="/ingredients">
            <MainLayout>
                <Route component={Ingredients}/>
            </MainLayout>
        </Route>



        <Route exact path="/meals/:meal" component={MealCat}/>
        <Route exact path="/meals/:meal/:id" component={MealDetails}/>
        <Route exact path="/areas/:area" component={AreaCat}/>
        <Route exact path="/ingredients/:ingredient" component={IngCat}/>
        <Route exact component={Unknown}/>
  </Switch>
            
}

export default Routes;

function Unknown(){
    return <div>
        Error 404: Page doesn't Exist
    </div>
}