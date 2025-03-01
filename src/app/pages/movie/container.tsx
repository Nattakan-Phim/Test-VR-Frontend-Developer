/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { Movie } from "./type";


const container = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Movie[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (showPopup) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showPopup]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=a`
        );
        const data = await response.json();
        console.log("data", data);
        if (data.results) {
          const moviesWithPrice = data.results.map((movie: Movie) => ({
            ...movie,
            price: Math.floor(Math.random() * 20) + 5, // Random price between 5 and 25
          }));
          setMovies(moviesWithPrice);
        } else {
          console.error("No results found in the response data.");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const addToCart = (movie: Movie) => {
    setCart((prevCart) => [...prevCart, movie]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handlePurchase = () => {
    setShowPopup(true);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateCartDetails = () => {
    const totalItems = cart.length;
    const discount = totalItems > 5 ? 0.2 : totalItems > 3 ? 0.1 : 0;
    const totalPrice = cart.reduce((acc, movie) => acc + movie.price, 0);
    const finalPrice = totalPrice * (1 - discount);
    return { totalItems, discount, totalPrice, finalPrice };
  };

  const { totalItems, discount, finalPrice } = calculateCartDetails();

  return {
    calculateCartDetails,
    filteredMovies,
    handlePurchase,
    clearCart,
    addToCart,
    movies,
    searchTerm,
    setMovies,
    setSearchTerm,
    cart,
    setCart,
    showPopup,
    setShowPopup,
    countdown,
    setCountdown,
    totalItems,
    discount,
    finalPrice,
  };
};

export default container;
