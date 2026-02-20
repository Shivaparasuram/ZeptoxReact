import { useParams, Link, Routes, Route, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * RockersPage Component
 * Displays rocker/music genre products with nested routes
 * Uses React Router for navigation and route parameters
 */
const RockersPage = () => {
    const { category } = useParams();

    // Sample rocker/music product data
    const rockersProducts = [
        { id: 1, title: 'Band Merchandise', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop' },
        { id: 2, title: 'Rock T-Shirts', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop' },
        { id: 3, title: 'Vintage Jackets', img: 'https://images.unsplash.com/photo-1551028919-ac66e9a197d8?w=400&h=500&fit=crop' },
        { id: 4, title: 'Music Accessories', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=500&fit=crop' },
        { id: 5, title: 'Concert Wear', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=500&fit=crop' },
    ];

    return (
        <div className="app">
            <Header />

            <main className="app__content">
                {/* Nested Navigation for Categories */}
                <nav className="header__nav" style={{ padding: '1rem 60px', background: '#f8fafc' }}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink
                                to="/rockers"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                                end
                            >
                                All Rockers
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/rockers/merch"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Merchandise
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/rockers/apparel"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Apparel
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/rockers/accessories"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Accessories
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Page Header */}
                <div className="page__header" style={{ padding: '2rem 60px 1rem' }}>
                    <h1 className="page__title">Rockers Collection</h1>
                    <p className="page__subtitle">
                        {category ? `Browse our ${category} collection` : 'Express your rock spirit with our exclusive collection'}
                    </p>
                </div>

                {/* Product Grid */}
                <div className="content">
                    <h3 className="content__title">Rock & Roll Essentials</h3>
                    <div className="product-grid">
                        {rockersProducts.map((product) => (
                            <Link
                                to={`/rockers/product/${product.id}`}
                                key={product.id}
                                className="product-grid__item"
                                style={{ animation: 'fadeIn 0.3s ease-out forwards', opacity: 0 }}
                            >
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="product-grid__item"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Nested Routes */}
                <Routes>
                    <Route index element={
                        <div className="content">
                            <h3 className="content__title">All Rocker Products</h3>
                            <div className="product-grid">
                                {rockersProducts.map((product) => (
                                    <Link
                                        to={`/rockers/product/${product.id}`}
                                        key={product.id}
                                        className="product-grid__item"
                                    >
                                        <img
                                            src={product.img}
                                            alt={product.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="merch" element={
                        <div className="content">
                            <h3 className="content__title">Band Merchandise</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Official band merchandise and collectibles</p>
                            <div className="product-grid">
                                {rockersProducts.slice(0, 2).map((product) => (
                                    <Link to={`/rockers/product/${product.id}`} key={product.id} className="product-grid__item">
                                        <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="apparel" element={
                        <div className="content">
                            <h3 className="content__title">Rock Apparel</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Wear your music attitude</p>
                            <div className="product-grid">
                                {rockersProducts.slice(1, 3).map((product) => (
                                    <Link to={`/rockers/product/${product.id}`} key={product.id} className="product-grid__item">
                                        <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="accessories" element={
                        <div className="content">
                            <h3 className="content__title">Music Accessories</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Complete your rock look</p>
                            <div className="product-grid">
                                {rockersProducts.slice(3, 5).map((product) => (
                                    <Link to={`/rockers/product/${product.id}`} key={product.id} className="product-grid__item">
                                        <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};

export default RockersPage;
