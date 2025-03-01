/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import container from "./container";

interface Movie {
  id: number;
  title: string;
  price: number;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

const MoviePage = () => {
  const {
    filteredMovies,
    addToCart,
    searchTerm,
    setSearchTerm,
  } = container();

  return (
    <div className="p-10 bg-gray-500">
      <h1>Movie Store</h1>
      <span className="flex items-center justify-between gap-4 ">
        <SearchIcon fontSize="large"/>
        <TextField
          label="Search movie title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          margin="normal"
          variant="standard"
          style={{ marginBottom: "20px", color: "white" }}
        />
      </span>

      <Grid container spacing={2}>
        {filteredMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardContent>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                  style={{ width: "100%", height: "380px" }}
                />
                <Grid className="py-4">
                  <section
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        color: "green",
                        whiteSpace: "nowrap",
                        paddingRight: "17px",
                      }}
                    >
                      $ {movie.price}
                    </Typography>
                    <Typography variant="h5">{movie.title}</Typography>
                  </section>

                  <section
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      <CalendarMonthIcon /> : {movie.release_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <StarIcon /> : {movie.vote_average}
                    </Typography>
                  </section>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(movie)}
                >
                  <ShoppingCartIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MoviePage;
