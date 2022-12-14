import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import {userRequest} from '../requestMethod';
import { Link } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data =location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state)=>state.user.currentUser);
  const[orderId,setOrderId] = useState(null);
  
  useEffect( () => {
    if (currentUser === null)
      navigate("/login");
  }, [currentUser,navigate]);

useEffect(()=>{
  const createOrder = async () =>{
  try {
    
      const res = await userRequest.post("/orders",{
            userid:currentUser._id,
            products: cart.products.map((item) => 
            ( {
            productId: item._id,
            quantity: item.quantity,
           }) ),
            amount:cart.total,
            address:data.shipping.address,
    
       });
      setOrderId(res.data._id);
      console.log(res.data);
    }catch (error) {
      console.log(error.message);
    }
  } 
    createOrder();
},[data,cart,currentUser]);

  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {orderId
      ? `Order has been created successfully. Your order number is ${orderId}`
      : `Successfull. Your order is being prepared...`}
      <Link to="/">
    <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </Link>
  </div>
  )
}
