
import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addRecipe, updateRecipe } from '../redux/recipeSlice'
import { useLocation } from 'react-router-dom'
import { toast } from '../App'
import Header from '../components/Header'

function AddRecipe() {
const dispatch = useDispatch()
    const location = useLocation()
    const recipe = location.state




    
    const [name, setName] = useState(recipe ? recipe.name : '')
    const [image, setImage] = useState(recipe ? recipe.image : '')
    const [cuisine, setCuisine] = useState(recipe ? recipe.cuisine : '')

            const handleSubmit = (e) => {e.preventDefault()

        const newRecipe = {
            id: recipe ? recipe.id : Date.now(),
            name: name,
            image: image,
            cuisine: cuisine
        }

        if (recipe){
            dispatch(updateRecipe(newRecipe))
     toast.success('Recipe updated successfully!')
        }else{
            dispatch(addRecipe(newRecipe))
            
            toast.success('Recipe added successfully!')
     setName('')
            setImage('')
      setCuisine('')
        }
    }

    return (
        <>
            <Header />

            <Container className="mt-5">
                <h2>{recipe ? 'Edit Recipe' : 'Add Recipe'}</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name}  onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control value={image}onChange={(e) => setImage(e.target.value)}required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Cuisine</Form.Label>
                        <Form.Control value={cuisine}
 onChange={(e) => setCuisine(e.target.value)}  required/>
                    </Form.Group>
                    <Button type="submit">{recipe ?'Update Recipe' : 'Add Recipe'}</Button>
                </Form>
            </Container>
        </>
    )
}

export default AddRecipe
