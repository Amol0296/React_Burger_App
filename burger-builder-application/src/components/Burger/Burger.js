import React from 'react';
import { withRouter } from 'react-router-dom'
import classes from './Burger.css'

import BurgerIngredent from './BurgerIngredient/BurgerIngredent';
const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredent key={igKey + 1} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!</p>;
    }
    console.log({ transformIngredients });
    return (

        < div className={classes.Burger} >
            <BurgerIngredent type="bread-top" />

            {transformIngredients}
            <BurgerIngredent type="bread-bottom" />
        </div >
    );
}


export default withRouter(burger);