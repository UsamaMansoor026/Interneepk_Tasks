import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [popOver, setPopOver] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);

  /* Handling the PopUp content */
  const handlePopUp = (item) => {
    setPopOver(true);
    const singleItem = {
      name: item.title,
      image: item.image,
      desc: item.description,
      rate: item.rating.rate,
      totalRating: item.rating.count,
    };
    setSingleProduct(singleItem);
  };

  /* This function handles the remove item functionality */
  const handleRemoveItem = (id) => {
    setPopOver(false);
    const filteredProducts = products.filter((item) => item.id !== id);
    setProducts(filteredProducts);
  };

  /* This function is used to fetch the products by making the REST_API call */
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const JSON_response = await response.json();
      setProducts(JSON_response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginBlock: "14px" }}>
        Example of REST_API
      </h1>

      {/* Mapping through the fetched products and displaying in UI */}
      <div className="parent">
        {products ? (
          products.map((item) => (
            <article key={item.id}>
              <h1
                className="removeBtn"
                onClick={() => handleRemoveItem(item.id)}
              >
                X
              </h1>
              <div onClick={() => handlePopUp(item)}>
                <div
                  style={{
                    overflow: "hidden",
                    border: "1px solid #a89bce",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content">
                  <h1 className="title">{item.title}</h1>
                  <p className="price">Price: $ {item.price}</p>
                  <p className="rating">Rating: {item.rating.rate}</p>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>No Products</p>
        )}

        {/* Popup */}
        {popOver && (
          <div className="popOver">
            <div className="popup_content">
              <h1 className="close" onClick={() => setPopOver(false)}>
                X
              </h1>
              <div className="popUp_UpperContext">
                <img
                  style={{ width: "140px", aspectRatio: "1/1" }}
                  src={singleProduct.image}
                  alt=""
                />
                <div>
                  <h1 style={{ marginBlock: "14px" }}>{singleProduct.name}</h1>
                  <p>
                    Rating: {singleProduct.rate}{" "}
                    <span style={{ color: "yellow" }}>
                      <ion-icon name="star"></ion-icon>
                    </span>
                  </p>
                  <p style={{ marginTop: "6px" }}>
                    Rate By:{" "}
                    <span style={{ fontWeight: "600", fontSize: "17px" }}>
                      {singleProduct.totalRating}
                    </span>{" "}
                    users
                  </p>
                </div>
              </div>
              <p>{singleProduct.desc}</p>
            </div>
          </div>
        )}
      </div>

      <footer>
        <p>Copyright &copy; | Usama Mansoor</p>
      </footer>
    </>
  );
}

export default App;
