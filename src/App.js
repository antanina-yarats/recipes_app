import {useState, useEffect} from 'react';
import './App.css';
import VideoBackground from './VideoBackground';
import Recipes from './Recipes';


function App() {

  const MY_ID = "0bb03d57";
  const MY_KEY = "d61e4dc07045af9bd8c03d9afc7bc0ee";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([])
  const [wordSubmitted, setWordSubmitted] = useState("")


  useEffect(()=> {
    const getRecipe = async() => {
     const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
     const data = await response.json();
     setMyRecipes(data.hits);
    }
    getRecipe();
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
   setMySearch(e.target.value);
  }

  const preventReload = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return(
    <div className="App">

      <div className='headerBox'>
       <h1 className='header'>Search for recipes</h1>
      </div>

      <VideoBackground />


      <div className="container">
        <form onSubmit={preventReload}>
          <input onChange={myRecipeSearch} className='search' placeholder='Type ingredients here ...' value={mySearch}/>
        </form>
      </div>

        <div className="container">
        <button onClick={preventReload}className='btn'>
        <span className='btn-text'>Search</span>
          <img className="btn-image" src="https://cdn.glitch.global/d428b9ff-55a8-43e4-9056-294c40bb0592/icons8-search.svg?v=1719057184720" alt="magnifier" width="40px" />
        </button>
        </div>

        <div className='recipes-container'>
        {myRecipes.map((elem, index)=> (
         <Recipes key={index}
         label={elem.recipe.label}
         image={elem.recipe.image}
         calories={elem.recipe.calories}
         ingredients={elem.recipe.ingredientLines}
        />
        )
        )}
        </div>
        
        </div>

    
  )

}


export default App;