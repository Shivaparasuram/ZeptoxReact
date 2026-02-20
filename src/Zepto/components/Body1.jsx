import { Link } from 'react-router-dom';

/**
 * Body1 Component
 * Displays women's products in a grid layout
 * Uses React Router Link for navigation
 * Follows BEM naming convention
 */
const Body1 = (props) => {
    const { title, img1, img2, img3, img4, img5 } = props.women1;

    const productImages = [img1, img2, img3, img4, img5];

    return (
        <section className="content">
            <h3 className="content__title">{title}</h3>
            <div className="product-grid">
                {productImages.map((imgSrc, index) => (
                    <Link
                        to={`/women/product/${index + 1}`}
                        key={index}
                        className="product-grid__item"
                    >
                        <img
                            src={imgSrc}
                            alt={`Women's Product ${index + 1}`}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Body1;
