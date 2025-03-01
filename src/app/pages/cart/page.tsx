"use client";
import { Button, Card, CardContent, Typography } from "@mui/material";

import React from "react";
import container from "../movie/container"; // Adjust the path as necessary

const CartPage = () => {
  const {
    handlePurchase,
    clearCart,
    cart,
    showPopup,
    countdown,
    totalItems,
    discount,
    finalPrice,
  } = container();

  console.log("cart: ", cart.length);

  return (
    <div>
      <div className="mb-8">
        <h2>Cart</h2>
        {cart.map((movie, index) => (
          <Card key={index} style={{ marginBottom: "10px" }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${movie.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <div className="flex flex-col items-center gap-8">
          <Typography variant="body1">Total Items: {totalItems}</Typography>
          <Typography variant="body1">Discount: {discount * 100}%</Typography>
          <Typography variant="body1">
            Total Price: ${finalPrice.toFixed(2)}
          </Typography>
          <div className="flex gap-4">
            <Button variant="contained" color="secondary" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePurchase}
            >
              Purchase
            </Button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup flex flex-col items-center gap-4">
          <h2>Payment Information</h2>
          <p>
            Please transfer the amount to the following account within 1 minute:
          </p>
          <p>Account Number: 123-456-789</p>
          <p>Countdown: {countdown} seconds</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
