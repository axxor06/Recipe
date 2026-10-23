
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const result = await axios.get('https://dummyjson.com/recipes')
    return result.data.recipes
})

const recipeSlice = createSlice({
    name: 'recipes',

    initialState: { recipes: [],
    recipesDummy: [], loading: false,
    error: '',hasFetched: false
    },

reducers: { searchRecipes: (state, action) => {
            state.recipes = state.recipesDummy.filter((recipe) =>
                
                
                
                recipe.cuisine.toLowerCase().includes(action.payload.toLowerCase())
            )
        },

        addRecipe: (state, action) => {
         state.recipesDummy.push(action.payload)
state.recipes.push(action.payload)
        },

        deleteRecipe: (state, action) => {
            
            
        state.recipes = state.recipes.filter(
                        
            
            
            
            (recipe) => recipe.id !== action.payload
            )

            state.recipesDummy = state.recipesDummy.filter(
                (recipe) => recipe.id !== action.payload
            )
        },

        updateRecipe: (state, action) => {
            const index = state.recipesDummy.findIndex(
                (recipe) => recipe.id === action.payload.id
            )

            if (index !== -1) {
            
                
                state.recipesDummy[index] = action.payload
            }

            state.recipes = state.recipesDummy
        }
    },

    extraReducers: (builder) => {
      
      
                builder.addCase(fetchRecipes.pending, (state) => {
            state.loading = true
                state.error = ''
        })  

        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
                      state.recipes = action.payload
                     state.recipesDummy = action.payload
              state.loading = false
            state.error = ''
   state.hasFetched = true
        })

        builder.addCase(fetchRecipes.rejected, (state) => {
          state.loading = false
   state.error = 'Failed to fetch recipes'
            state.hasFetched = true
        })
    }
})

export const {searchRecipes ,addRecipe, deleteRecipe, updateRecipe } = recipeSlice.actions




export default recipeSlice.reducer
