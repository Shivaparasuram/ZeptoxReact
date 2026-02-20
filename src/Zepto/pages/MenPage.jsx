import { useParams, Link, Routes, Route, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menImage } from '../products';

/**
 * MenPage Component
 * Displays men's clothing products with nested routes for categories
 * Uses React Router for navigation and route parameters
 */
const MenPage = () => {
    const { category } = useParams();

    // Filter products based on category if provided
    const products = category
        ? Object.entries(menImage).filter(([key]) => key.startsWith('img'))
        : Object.entries(menImage).filter(([key]) => key.startsWith('img'));

    return (
        <div className="app">
            <Header />

            <main className="app__content">
                {/* Nested Navigation for Categories */}
                <nav className="header__nav" style={{ padding: '1rem 60px', background: '#f8fafc' }}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink
                                to="/men"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                                end
                            >
                                All Men
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/men/shirts"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Shirts
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/men/pants"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Pants
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/men/jackets"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Jackets
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Page Header */}
                <div className="page__header" style={{ padding: '2rem 60px 1rem' }}>
                    <h1 className="page__title">Men's Collection</h1>
                    <p className="page__subtitle">
                        {category ? `Browse our ${category} collection` : 'Explore the latest trends in menswear'}
                    </p>
                </div>

                {/* Product Grid */}
                <div className="content">
                    <h3 className="content__title">{menImage.title}</h3>
                    <div className="product-grid">
                        {Object.entries(menImage)
                            .filter(([key]) => key.startsWith('img'))
                            .map(([key, src], index) => (
                                <Link
                                    to={`/men/product/${index + 1}`}
                                    key={key}
                                    className="product-grid__item"
                                    style={{ animation: 'fadeIn 0.3s ease-out forwards', opacity: 0 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Men's Product ${index + 1}`}
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
                                        to={`/men/product/${index + 1}`}
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
                    <Route path="shirts" element={
                        <div className="content">
                            <h3 className="content__title">Shirts Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Browse our collection of stylish shirts</p>
                            <div className="product-grid">
                                {[menImage.img1, menImage.img2, menImage.img3].map((src, index) => (
                                    <Link to={`/men/product/${index + 1}`} key={index} className="product-grid__item">
                                        <img src={src} alt={`Shirt ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="pants" element={
                        <div className="content">
                            <h3 className="content__title">Pants Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Discover comfortable and stylish pants</p>
                            <div className="product-grid">
                                {[menImage.img4, menImage.img5, menImage.img6].map((src, index) => (
                                    <Link to={`/men/product/${index + 4}`} key={index} className="product-grid__item">
                                        <img src={src} alt={`Pants ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="jackets" element={
                        <div className="content">
                            <h3 className="content__title">Jackets Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Stay warm with our premium jackets</p>
                            <div className="product-grid">
                                {[menImage.img7, menImage.img8, menImage.img9].map((src, index) => (
                                    <Link to={`/men/product/${index + 7}`} key={index} className="product-grid__item">
                                        <img src={src} alt={`Jacket ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
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

export default MenPage;
