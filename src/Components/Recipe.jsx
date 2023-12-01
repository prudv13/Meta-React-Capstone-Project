import React from 'react'

const Recipe = ({recipeTitle, recipeImg, recipeDescription, recipePrice}) => {
  return (
    <div className='col-12 col-md-6 col-lg-4 col-xl-3 my-2'>
        <div className='card bg-transparent border-0'>
            <img src={recipeImg} className="card-img-top" alt="card-img-top" />
            <div className="card-body rounded-bottom">
                <h5 className="card-title">{recipeTitle}</h5>
                <p className="card-text">{recipeDescription}</p>
                <div className='card-bottom d-flex justify-content-between align-items-center'>
                    <span className="badge bg-light text-dark my-auto">{recipePrice}</span>
                    <button className='btn btn-ordernow btn-sm'>Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recipe;