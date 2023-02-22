import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Cart/actionCreator";
import { fetchPost } from "../redux/Products/actionCreator";
import {  toast } from 'react-toastify';

const Products = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products.products);
  const orderState = useSelector(state=>state.cartShopping)
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);


  const handleAddToCart =(productItem)=>{
    dispatch(addToCart(productItem))
    toast("successfully added to  your cart")
  }


  return (
    <div className="container">
      <div className="row mt-5 g-3">
        {productsState &&
          productsState.map((item) => {
            return (
              <div className="col-md-3" key={item.id}>
                <div className="card">
                  <img className="card-img-top" src={item.image} alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-sm btn-outline-success">
                      Add to cart
                    </button>
                    <span>{item.price}</span>
                  </div>  
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
