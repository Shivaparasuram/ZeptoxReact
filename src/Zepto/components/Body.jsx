import { Link } from 'react-router-dom';

/**
 * Body Component
 * Displays men's products in a grid layout
 * Uses React Router Link for navigation
 * Follows BEM naming convention
 */
const Body = (props) => {
    const { title, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = props.men1;

    const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <section className="content">
            <h3 className="content__title">{title}</h3>
            <div className="product-grid">
                {productImages.map((imgSrc, index) => (
                    <Link
                        to={`/men/product/${index + 1}`}
                        key={index}
                        className="product-grid__item"
                    >
                        <img
                            src={imgSrc}
                            alt={`Men's Product ${index + 1}`}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Body;
