
function MenuCard({
  name,
  category,
  description,
  price,
  image,
  onAdd,
}) {
  return (
    <div className="menu-card">

      {/* Food Image */}
      <div className="food-image-container">
        <img
          src={image}
          alt={name}
          className="food-image"
        />
      </div>

      {/* Category */}
      <p className="card-category">
        {category}
      </p>

      {/* Food Name */}
      <h2>{name}</h2>

      {/* Description */}
      <p className="card-description">
        {description}
      </p>

      {/* Price + Button */}
      <div className="card-bottom">

        <h3>
          Rs. {price}
        </h3>

        <button onClick={onAdd}>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default MenuCard;