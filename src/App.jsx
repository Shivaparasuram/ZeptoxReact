import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import all page components
import MainPage from './Zepto/pages/MainPage.jsx';
import MenPage from './Zepto/pages/MenPage.jsx';
import WomenPage from './Zepto/pages/WomenPage.jsx';
import KidsPage from './Zepto/pages/KidsPage.jsx';
import RockersPage from './Zepto/pages/RockersPage.jsx';
import ProductDetailPage from './Zepto/pages/ProductDetailPage.jsx';
import SignupPage from './Zepto/pages/SignupPage.jsx';

/**
 * Main App Component
 * Sets up React Router with route parameters, nested routes, and navigation
 * 
 * Route Structure:
 * - /                    : Home/MainPage
 * - /men                 : Men's page with nested categories
 * - /men/shirts          : Men's shirts category
 * - /men/pants           : Men's pants category
 * - /men/jackets         : Men's jackets category
 * - /men/product/:id     : Product detail with route parameter
 * - /women               : Women's page with nested categories
 * - /women/tops          : Women's tops category
 * - /women/dresses       : Women's dresses category
 * - /women/outerwear     : Women's outerwear category
 * - /women/product/:id  : Product detail with route parameter
 * - /kids                : Kids page with nested categories
 * - /kids/boys           : Boys category
 * - /kids/girls          : Girls category
 * - /kids/baby           : Baby category
 * - /kids/product/:id   : Product detail with route parameter
 * - /rockers             : Rockers page with nested categories
 * - /rockers/merch       : Merchandise category
 * - /rockers/apparel     : Apparel category
 * - /rockers/accessories : Accessories category
 * - /rockers/product/:id : Product detail with route parameter
 * - /signup              : Signup page
 */
function App() {
  return (
    <div className="app">
      <Routes>
        {/* Home/Main Page */}
        <Route path="/" element={<MainPage />} />

        {/* Men Routes with Nested Categories */}
        <Route path="/men" element={<MenPage />} />
        <Route path="/men/:category" element={<MenPage />} />
        <Route path="/men/product/:productId" element={<ProductDetailPage />} />

        {/* Women Routes with Nested Categories */}
        <Route path="/women" element={<WomenPage />} />
        <Route path="/women/:category" element={<WomenPage />} />
        <Route path="/women/product/:productId" element={<ProductDetailPage />} />

        {/* Kids Routes with Nested Categories */}
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/kids/:category" element={<KidsPage />} />
        <Route path="/kids/product/:productId" element={<ProductDetailPage />} />

        {/* Rockers Routes with Nested Categories */}
        <Route path="/rockers" element={<RockersPage />} />
        <Route path="/rockers/:category" element={<RockersPage />} />
        <Route path="/rockers/product/:productId" element={<ProductDetailPage />} />

        {/* Signup Route */}
        <Route path="/signup" element={<SignupPage />} />

        {/* 404 - Page Not Found (catch all) */}
        <Route path="*" element={
          <div className="app" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
            <h1 style={{ fontSize: '4rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Page Not Found</h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>The page you're looking for doesn't exist.</p>
            <a href="/" className="btn btn--primary">Go Home</a>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
