import { Link } from 'react-router-dom'

// We use Link on this page rather than <a></a> because unlike the anchor tag, Link
// does not have to reload the whole app before sending you to the endpoint.

const HomePage = () => {
    return (
        <>
            <h1>My Home Page</h1>
            <p>Go to <Link to="/products">the list of products</Link></p>
        </>
    )
}

export default HomePage;