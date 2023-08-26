import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    // useParams lets us get ahold of the data that is encoded in the URL. For example,
    // if we go to the URL localhost:3000/products/43523 params.productId will be 43523.
    // We set productId to this dynamic endpoint in App.js if you want to take a look.
    const params = useParams();

    return (
        <>
            <h1>Product details</h1>
            <p>{params.productId}</p>
        </>
    );
}

export default ProductDetailPage;