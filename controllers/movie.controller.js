import { Movie } from "../models/movie.model.js";

export function getAllMovies() {
  return Movie.find({}).populate("movieProducer").populate("movieActors");
}

export function postNewMovie(req) {
  return new Movie({ ...req.body }).save();
}

export function updateMovie(req) {
  return Movie.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
}

export function deleteMovie(req) {
  return Movie.findOneAndDelete({ _id: req.params.id });
}
