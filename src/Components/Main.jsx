import React from 'react'
import Recipe from './Recipe';
import { recipes } from '../utils/recipeData';

const Main = () => {
  return (
    <main className='main container-fluid'>
      <div className='d-flex justify-content-between align-items-end mb-5'>
        <h5 className='week-special'>This weeks Specials</h5>
        <button className='btn btn-warning'>Online Menu</button>
      </div>

      <div className='row'>
        {
          recipes.map( recipe => (
            <Recipe
              key={recipe.id}
              recipeTitle={recipe.recipeTitle}
              recipeImg={recipe.recipeImg}
              recipeDescription={recipe.recipeDescription}
              recipePrice={recipe.recipePrice}
            />
          ))
        }

      </div>
    </main>
  )
}

export default Main;