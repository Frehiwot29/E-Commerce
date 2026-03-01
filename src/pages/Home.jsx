import ProductCard from '../components/ProductCard';
import { getProducts } from '../data/Products'

function Home() {

    const products = getProducts();
    return (
        <div className='page'>
            <div className='home-hero'>
                <h1 className='home-title'>Welcome to shopHub</h1>
                <p className='home-subtitle'>
                    Discover Amazing Products at great Prices
                </p>
                <div className='container'>
                    <h2 className='page-title'>Our Products</h2>
                    <div className='product-grid'>
                        {products.map((product) => (
                            <ProductCard product={product} key={product.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
