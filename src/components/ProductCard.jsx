import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContent } from "../ApiContext";



const ProductCard = () => {
  // const [query,setQuery]=useContext(ApiContent)
  // setQuery(query)
  // const [wear, setWear] = useState([]);
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${query}`)
  //     .then((res) => res.json())
  //     .then((json) => setWear(json));
  // }, []);
  const [wear,setWear]=useContext(ApiContent)
  console.log(wear);
  return (
    <div className="product">
      {wear.map((wear) => (
        <div className="product-card" key={wear.id}>
          <img src={wear.image} alt="" />
          <h3
            className="product-name"
            style={{
              textOverflow: wear.title.length > 20 ? "ellipsis" : "auto",
              overflow: wear.title.length > 20 ? "hidden" : "auto",
              whiteSpace: wear.title.length > 20 ? "nowrap" : "wrap",
              width: "300px",
              textAlign: "center",
            }}
          >
            {wear.title}
          </h3>
          <span className="product-price">${wear.price.toFixed(2)}</span>
          <button
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <Link to={`/men/${wear.id}`}> view more</Link>
          </button>
          {/* <p className='product-decription'>{wear.description}</p> */}
        </div>
      ))}
    </div>
  );
};
export default ProductCard;
// ("https://fakestoreapi.com/products");
