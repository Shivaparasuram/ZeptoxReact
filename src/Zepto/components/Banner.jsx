/**
 * Banner Component
 * Full-screen promotional banner with image
 * Follows BEM naming convention
 */
const Banner = () => {
  return (
    <div className="banner">
      <img
        src="/Banner/HP_3.jpeg"
        alt="Featured Promotion - Shop the Latest Collection"
        className="banner__image"
      />
    </div>
  );
};

export default Banner;
