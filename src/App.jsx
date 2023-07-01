import RecipeList from './RecipeList'
import recipes from './recipes'
import './App.css'
import './styles.css'

function App() {
 
  return (
    <> 
    <h1>Recipe Finder</h1> 
      <RecipeList recipes={recipes[0]} />
      <RecipeList recipes={recipes[1]} />
      <RecipeList recipes={recipes[2]} />
    </>
  )
}

export default App


 

