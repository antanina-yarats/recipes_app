


const Recipes = ({label, image, calories, ingredients}) => {
 return (
  <div>
    <div className="container">
    <h1 className='header'>{label}</h1>
    </div>

    <div className="container">
    <img src={image} alt="recipe" />
    </div>

    <div className="container">
    <p className="par">{calories.toFixed()} calories</p>
    </div>

    <div>
      <ul>
        {ingredients.map((ingredient, index)=> (
          <li className="list" key={index}> 
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="icon"/>
          {ingredient}</li>
        )
        )}
      </ul>
    </div>
  </div>
 )
}

export default Recipes;