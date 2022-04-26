import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../single.css";
import { useParams } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const script = require('../464f9a29cc.php')

const icon = require("../images/upper.png");

const Single = () => {
  const Params = useParams();
  const { id } = Params;

  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [loading, setloading] = useState(false);

  const getData = async () => {
    await axios
      .get(
        `https://onlinetoolscave.in/576f5b62-e850-4071-84fa-6a05d5cf0d6e/${id}`
      )
      .then((resp) => {
        setdata(resp.data);
      });
    setloading(true);
  };
  const getData2 = async () => {
    await axios
      .get(`https://onlinetoolscave.in/7fdc5422-400d-4574-8d22-c7abdea98f3c`)
      .then((resp) => {
        setdata2(resp.data);
      });
  };

  useEffect(() => {
    getData();
    getData2();
  }, []);

  return (
    <>
      <div className="Bottomads">
        <iframe
          data-aa="1960936"
          src="//ad.a-ads.com/1960936?size=468x60"
          style={{
            width: "468px",
            height: "60px",
            border: "0",
            padding: "0",
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </div>
      <script src={script}></script>
      <Navbar />
      <div className="SingleContainer">
        {loading ? (
          data.map((Movies) => {
            const {
              title,
              image,
              genre,
              rating,
              director,
              cast,
              release,
              story,
              id,
            } = Movies;
            return (
              <>

                <Helmet>
                  <meta name="apple-mobile-web-app-capable" content="yes" />
                  <title>{title}</title>

                  <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                  />
                  <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                  />
                  <link rel="icon" href={icon} type="image/x-icon"></link>
                  <meta
                    name="description"
                    content={`${title} In Hindi Dubbed And 480p,720p & 1080p From KatMovies`}
                  />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:title"
                    content="KatMovies.tk |KatMovies | Kat Movies | KatMovies-300mb Movies, 480p Movies"
                  />
                  <meta
                    property="og:description"
                    content="katmovies,ktmovieshd,kat movies ,MoviesFlix,moviesflix.com,moviesflixpro,moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net,tamilrockers,moviesverse,movies verse,vegamovies,vega movies,KatMovieHd.sx,MovieskiDuniya,Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
                  />
                  <meta property="og:url" content="http://katmovies.tk/" />
                  <meta
                    property="og:site_name"
                    content="KatMovies.tk |KatMovies | Kat Movies | KatMovies-300mb Movies, 480p Movies"
                  />
                </Helmet>
                <div className="info">
                  <h1 className="singleheader">{title}</h1>
                  <div className="SingleContainer2">
                    <img
                      className="image"
                      src={image}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
                      }}
                    />
                    <div className="textContainer">
                      <h3 className="about">ABOUT:</h3>
                      <div className="single">
                        <div dangerouslySetInnerHTML={{ __html: story }} />
                      </div>
                    </div>
                  </div>
                  <h3 className="about">ABOUT SITE:</h3>
                  <div className="MobileAds">
                  </div>
                  <h6 className="singleheader1">
                    Download {title}. This is a Hindi movie and available in
                    720p & 480p qualities. This is one of the best movie based
                    on {genre}. This part of this series is now dubbed in Hindi.
                    Click on the Download links below to proceed👇
                  </h6>
                  <h6 className="singleheader1">
                    The Best Website/Platform For Hollywood HD Movies. We
                    Provide Direct Google Drive Download Links For Fast And
                    Secure Downloading. Just Click On Download Button And Follow
                    Steps To Download And Watch Movies Online For Free
                  </h6>
                  <h3 className="about">DOWNLOAD LINK:</h3>
                  <h6 className="singleheader1">
                    Download {title} Link Is Below
                  </h6>
                  <a class="col-10 downloadButton" href={`/download/${id}`}>
                    <button class="btn btn-danger col-12" type="button">
                      DOWNLOAD
                    </button>
                  </a>
                </div>
              </>
            );
          })
        ) : (
          <div className="loadingcontainer">
            <div class="spinner-grow text-primary" role="status"></div>
            <div class="spinner-grow text-secondary" role="status"></div>
            <div class="spinner-grow text-success" role="status"></div>
            <div class="spinner-grow text-danger" role="status"></div>
            <div class="spinner-grow text-warning" role="status"></div>
            <div class="spinner-grow text-info" role="status"></div>
            <div class="spinner-grow text-light" role="status"></div>
            <div class="spinner-grow text-dark" role="status"></div>
          </div>
        )}
        <div className="sidebar">  
          <div class="d-grid gap-2">
            <button class="btn btn-danger" type="button">
              Please Do Not Use VPN for Downloading Movies From Our Site.
            </button>
            <button class="btn btn-success" type="button">
              Click On The Below Download Button Download File.
            </button>
            <button class="btn btn-warning" type="button">
              If You Find Any Broken Link Then Report To Us.
            </button>
            <button class="btn btn-info" type="button">
              And Don't Forget To Enjoy Movies
            </button>
          </div>
        </div>
      </div>
      <div className="related">
        {data2.map((Movies) => {
          const { title, image, id } = Movies;
          return (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="container1">
                <img
                  className="image1"
                  src={image}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
                  }}
                />
                <div className="tester">
                  {" "}
                  <a style={{ textDecoration: "none" }} href={`/post/${id}`}>
                    <text className="text">{title}</text>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Single;
