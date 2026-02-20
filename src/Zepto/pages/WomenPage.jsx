import { useParams, Link, Routes, Route, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { womenImage } from '../products';

/**
 * WomenPage Component
 * Displays women's clothing products with nested routes for categories
 * Uses React Router for navigation and route parameters
 */
const WomenPage = () => {
    const { category } = useParams();

    // Filter products based on category if provided
    const products = category
        ? Object.entries(womenImage).filter(([key]) => key.startsWith('img'))
        : Object.entries(womenImage).filter(([key]) => key.startsWith('img'));

    return (
        <div className="app">
            <Header />

            <main className="app__content">
                {/* Nested Navigation for Categories */}
                <nav className="header__nav" style={{ padding: '1rem 60px', background: '#f8fafc' }}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink
                                to="/women"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                                end
                            >
                                All Women
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/women/tops"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Tops
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/women/dresses"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Dresses
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/women/outerwear"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Outerwear
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Page Header */}
                <div className="page__header" style={{ padding: '2rem 60px 1rem' }}>
                    <h1 className="page__title">Women's Collection</h1>
                    <p className="page__subtitle">
                        {category ? `Browse our ${category} collection` : 'Explore the latest trends in womenswear'}
                    </p>
                </div>

                {/* Product Grid */}
                <div className="content">
                    <h3 className="content__title">{womenImage.title}</h3>
                    <div className="product-grid">
                        {Object.entries(womenImage)
                            .filter(([key]) => key.startsWith('img'))
                            .map(([key, src], index) => (
                                <Link
                                    to={`/women/product/${index + 1}`}
                                    key={key}
                                    className="product-grid__item"
                                    style={{ animation: 'fadeIn 0.3s ease-out forwards', opacity: 0 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Women's Product ${index + 1}`}
                                        className="product-grid__item"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* Nested Routes */}
                <Routes>
                    <Route index element={
                        <div className="content">
                            <h3 className="content__title">All Products</h3>
                            <div className="product-grid">
                                {products.map(([key, src], index) => (
                                    <Link
                                        to={`/women/product/${index + 1}`}
                                        key={key}
                                        className="product-grid__item"
                                    >
                                        <img
                                            src={src}
                                            alt={`Product ${index + 1}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="tops" element={
                        <div className="content">
                            <h3 className="content__title">Tops Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Browse our collection of stylish tops</p>
                            <div className="product-grid">
                                {[womenImage.img1, womenImage.img2].map((src, index) => (
                                    <Link to={`/women/product/${index + 1}`} key={index} className="product-grid__item">
                                        <img src={src} alt={`Top ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="dresses" element={
                        <div className="content">
                            <h3 className="content__title">Dresses Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Find the perfect dress for any occasion</p>
                            <div className="product-grid">
                                {[womenImage.img3, womenImage.img4].map((src, index) => (
                                    <Link to={`/women/product/${index + 3}`} key={index} className="product-grid__item">
                                        <img src={src} alt={`Dress ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="outerwear" element={
                        <div className="content">
                            <h3 className="content__title">Outerwear Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Stay warm with our premium outerwear</p>
                            <div className="product-grid">
                                {[womenImage.img5].map((src, index) => (
                                    <Link to={`/women/product/${index + 5}`} key={index} className="product-grid__item">
                                        <img src={src} alt={`Outerwear ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
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

export default WomenPage;
