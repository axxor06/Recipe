
import { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Form, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { fetchRecipes, deleteRecipe, searchRecipes } from '../redux/recipeSlice'

function Home() {
    const dispatch = useDispatch()
    const { recipes, loading, error, hasFetched } = useSelector(
        (state) => state.recipeReducer
    )

    const [search, setSearch] = useState('')

    useEffect(() => {
        if (!hasFetched) {
            dispatch(fetchRecipes())
        }
    }, [dispatch, hasFetched])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        dispatch(searchRecipes(e.target.value))
    }

    const handleDelete = (id) => {
        dispatch(deleteRecipe(id))
    }

    return (
        <>
            <Header />

            <div style={{ marginTop: '100px' }} className="container-fluid">
                <Form.Control className="mb-4"placeholder="Searcjh" value={search} onChange={handleSearch}/>

                <Link to="/add">
                    <Button className="mb-4">Add Recipe</Button>
                </Link>

                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : error ? (
                    <div className="alert alert-danger">{error}</div>
    ) : (
                    <Row>                {recipes.map((recipe) => (
            <Col key={recipe.id} className="m-3">
                        <Card style={{ width: '18rem' }}><Card.Img
variant="top"
src={recipe.image}
/>

        <Card.Body>
        <Card.Title>
        {recipe.name}
        </Card.Title>

 <Card.Text>
  Cuisine: {recipe.cuisine}           </Card.Text>
               <Link to="/add" state={recipe}>
        <Button variant="warning" className="me-2">Edit</Button>
                                        </Link>
 <Button variant="danger" onClick={() => handleDelete(recipe.id)}> Delete </Button>
 </Card.Body>
    </Card>
               </Col>
                ))}
           </Row>
            )}
            </div>
        </>
    )
}

export default Home
