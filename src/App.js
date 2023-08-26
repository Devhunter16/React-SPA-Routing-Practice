import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home';
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetail';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// Using createBrowserRouter to define our routes 
const myRouter = createBrowserRouter([
  // This object is a wrapper. Here we're essentially defining the template for
  // for all of our view files and saying thath the template can be found in our Root.js
  // file. We also define our error page here so that we are shown that should an error
  // occur.
  {
    path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
      // We define two object properties in each object, the path and the element. 
      // The router then matches the path in the browser with which component to render.
      { path: '', element: <HomePage /> },
      { path: 'products', element: <Products /> },
      // The colon in this path signals to react-router-dom that this is a dynamic path.
      { path: 'products/:productId', element: <ProductDetailsPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
