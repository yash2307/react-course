

const ProductCard = ({ product }) => {
   console.log(product);
    return (
        <div className="product-card">  
            <img src={product.thumbnail} alt={product.title} />    
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    )
}

export default ProductCard;    