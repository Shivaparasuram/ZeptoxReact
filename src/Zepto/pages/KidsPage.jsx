import { useParams, Link, Routes, Route, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * KidsPage Component
 * Displays kids clothing products with nested routes for categories
 * Uses React Router for navigation and route parameters
 */
const KidsPage = () => {
    const { category } = useParams();

    // Sample kids product data
    const kidsProducts = [
        { id: 1, title: 'Kidswear Collection', img: 'Banner/kid.jpeg' },
        { id: 2, title: 'Boys Fashion', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=500&fit=crop' },
        { id: 3, title: 'Girls Fashion', img: 'https://images.unsplash.com/photo-1519238263496-6543b3aa74a9?w=400&h=500&fit=crop' },
        { id: 4, title: 'Kids Accessories', img: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=500&fit=crop' },
        { id: 5, title: 'School Wear', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop' },
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
                                to="/kids"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                                end
                            >
                                All Kids
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/kids/boys"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Boys
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/kids/girls"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Girls
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                to="/kids/baby"
                                className={({ isActive }) => isActive ? 'header__nav-link header__nav-item--active' : 'header__nav-link'}
                            >
                                Baby
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Page Header */}
                <div className="page__header" style={{ padding: '2rem 60px 1rem' }}>
                    <h1 className="page__title">Kids Collection</h1>
                    <p className="page__subtitle">
                        {category ? `Browse our ${category} collection` : 'Discover adorable styles for your little ones'}
                    </p>
                </div>

                {/* Product Grid */}
                <div className="content">
                    <h3 className="content__title">Kidswear Essentials</h3>
                    <div className="product-grid">
                        {kidsProducts.map((product) => (
                            <Link
                                to={`/kids/product/${product.id}`}
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
                            <h3 className="content__title">All Kids Products</h3>
                            <div className="product-grid">
                                {kidsProducts.map((product) => (
                                    <Link
                                        to={`/kids/product/${product.id}`}
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
                    <Route path="boys" element={
                        <div className="content">
                            <h3 className="content__title">Boys Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Trendy styles for boys</p>
                            <div className="product-grid">
                                {kidsProducts.slice(1, 3).map((product) => (
                                    <Link to={`/kids/product/${product.id}`} key={product.id} className="product-grid__item">
                                        <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="girls" element={
                        <div className="content">
                            <h3 className="content__title">Girls Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Cute styles for girls</p>
                            <div className="product-grid">
                                {kidsProducts.slice(2, 4).map((product) => (
                                    <Link to={`/kids/product/${product.id}`} key={product.id} className="product-grid__item">
                                        <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    } />
                    <Route path="baby" element={
                        <div className="content">
                            <h3 className="content__title">Baby Collection</h3>
                            <p style={{ textAlign: 'center', color: '#64748b' }}>Soft and comfortable for babies</p>
                            <div className="product-grid">
                                {kidsProducts.slice(3, 5).map((product) => (
                                    <Link to={`/kids/product/${product.id}`} key={product.id} className="product-grid__item">
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

export default KidsPage;
