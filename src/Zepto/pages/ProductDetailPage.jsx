import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menImage, womenImage } from '../products';

/**
 * ProductDetailPage Component
 * Displays detailed product information using route parameters
 * Uses React Router useParams hook to get product ID
 */
const ProductDetailPage = () => {
    const { category, productId } = useParams();
    const navigate = useNavigate();

    // Get product data based on category
    const getProductData = () => {
        const allProducts = {
            men: Object.entries(menImage).filter(([key]) => key.startsWith('img')),
            women: Object.entries(womenImage).filter(([key]) => key.startsWith('img')),
        };

        const products = allProducts[category] || [];
        const index = parseInt(productId) - 1;

        if (index >= 0 && index < products.length) {
            return {
                id: productId,
                image: products[index][1],
                name: `${category?.charAt(0).toUpperCase() + category?.slice(1)} Product ${productId}`,
                price: Math.floor(Math.random() * 100) + 50,
                description: `Premium quality ${category} product. Perfect for your wardrobe collection.`,
            };
        }
        return null;
    };

    const product = getProductData();

    if (!product) {
        return (
            <div className="app">
                <Header />
                <main className="app__content" style={{ padding: '4rem', textAlign: 'center' }}>
                    <h2>Product Not Found</h2>
                    <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                        The product you're looking for doesn't exist.
                    </p>
                    <Link to="/" className="btn btn--primary">
                        Go Back Home
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="app">
            <Header />

            <main className="app__content">
                {/* Breadcrumb Navigation */}
                <nav style={{ padding: '1rem 60px', background: '#f8fafc' }}>
                    <ul style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                        <li><Link to="/" style={{ color: '#64748b' }}>Home</Link></li>
                        <li>{'>'}</li>
                        <li><Link to={`/${category}`} style={{ color: '#64748b' }}>{category?.charAt(0).toUpperCase() + category?.slice(1)}</Link></li>
                        <li>{'>'}</li>
                        <li style={{ color: '#2563eb' }}>Product {productId}</li>
                    </ul>
                </nav>

                {/* Product Detail Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    padding: '3rem 60px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* Product Image */}
                    <div style={{
                        borderRadius: '18px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Product Information */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span style={{
                            textTransform: 'uppercase',
                            color: '#64748b',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem'
                        }}>
                            {category} Collection
                        </span>

                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            marginBottom: '1rem',
                            color: '#111827'
                        }}>
                            {product.name}
                        </h1>

                        <p style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: '#2563eb',
                            marginBottom: '1.5rem'
                        }}>
                            ${product.price}
                        </p>

                        <p style={{
                            color: '#64748b',
                            lineHeight: '1.8',
                            marginBottom: '2rem'
                        }}>
                            {product.description}
                        </p>

                        {/* Size Selection */}
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                                Select Size
                            </h3>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button
                                        key={size}
                                        style={{
                                            padding: '0.75rem 1.25rem',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px',
                                            background: 'white',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.borderColor = '#2563eb';
                                            e.target.style.background = '#f8fafc';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.borderColor = '#e2e8f0';
                                            e.target.style.background = 'white';
                                        }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                className="btn btn--primary"
                                style={{
                                    flex: 1,
                                    padding: '1rem 2rem',
                                    fontSize: '1rem',
                                    fontWeight: '600'
                                }}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="btn btn--outline"
                                style={{
                                    padding: '1rem 2rem',
                                    fontSize: '1rem',
                                    fontWeight: '600'
                                }}
                                onClick={() => navigate(-1)}
                            >
                                Go Back
                            </button>
                        </div>

                        {/* Product Details */}
                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>
                                Product Details
                            </h3>
                            <ul style={{ color: '#64748b', lineHeight: '2' }}>
                                <li>• Premium quality material</li>
                                <li>• Comfortable fit</li>
                                <li>• Easy maintenance</li>
                                <li>• Free shipping on orders over $50</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div style={{ padding: '2rem 60px 4rem', background: '#f8fafc' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                        You May Also Like
                    </h2>
                    <div className="product-grid">
                        {[1, 2, 3, 4].map((num) => (
                            <Link
                                to={`/${category}/product/${num}`}
                                key={num}
                                className="product-grid__item"
                            >
                                <img
                                    src={product.image}
                                    alt={`Related Product ${num}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
