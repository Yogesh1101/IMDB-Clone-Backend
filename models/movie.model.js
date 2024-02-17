import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
    },
    movieYearOfRelease: {
      type: String,
      required: true,
    },
    moviePlot: {
      type: String,
      required: true,
    },
    moviePoster: {
      type: String,
      default:
        "https://e7.pngegg.com/pngimages/229/405/png-clipart-art-film-clapperboard-cinema-movie-theatre-miscellaneous-text-thumbnail.png",
    },
    movieDirector: {
      type: String,
      required: true,
    },
    movieProducer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cast",
    },
    movieActors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cast",
      },
    ],
  },
  { timestamps: true }
);

const Movie = new mongoose.model("movie", movieSchema);

export { Movie };
