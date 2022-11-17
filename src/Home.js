import React from "react";
import "./Home.css";
import image1 from "./components/image1.jpg";
import image2 from "./components/image2.jpg";
import image3 from "./components/image3.jpg";
import image4 from "./components/image4.jpg";
import a from "./components/a.jpg";
import b from "./components/b.jpg";
import c from "./components/c.jpg";
import d from "./components/d.jpg";
import e from "./components/e.jpg";
import f from "./components/f.jpg";
import g from "./components/g.jpg";
import h from "./components/h.jpg";
import Star from "./components/Star.jpg";
import nft_img from "./components/nft_img.jpg";
import Meta_header from "./components/Meta_header.jpg";
import Meta_footer from "./components/Meta_footer.jpg";
import facebook from "./components/facebook.jpg";
import instagram from "./components/instagram.jpg";
import twitter from "./components/twitter.jpg";
import opensea from "./components/opensea.jpg";
import Mbtoken from "./components/Mbtoken.jpg";
import Metatoken from "./components/Metatoken.jpg";

const Home = () => {
  return (
    
    <div className="body">
      <div className="container">
        <div className="navbar">
          <div className="navbar">
          <div className="logo">
            <img className="meta_logo" src={Meta_header} alt="meta-header" />
          </div>
          {/* <i class="fa-regular fa-bars"></i> */}
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Advent">Place to stay</a>
              </li>
              <li>NFTs</li>
              <li>Community</li>
            </ul>

            <a href="/Popup" ><button className="connect">Connect wallet</button></a>
          </nav>
         
        </div>
        </div>
        <header>
          <div className="header-content">
            <div className="rent-meta">
              <h1>
                Rent a <span>Place</span> away from <span>Home</span> in the{" "}
                <span>Metaverse</span>
              </h1>
              <p>
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>

              <div class="search">
                <input
                  class="srch"
                  type="search"
                  name="search"
                  placeholder="Search for location"
                />

                <button class="btn">Search</button>
              </div>
            </div>
            <div className="header-images">
              <div className="first">
                <img className="image1" src={image1} alt="pic1" />
                <img className="image2" src={image2} alt="pic1" />
              </div>
              <div className="second">
                <img className="image3" src={image3} alt="pic1" />
                <img className="image4" src={image4} alt="pic1" />
              </div>
            </div>
          </div>
        </header>

        <div className="wallets">
            <img src={Mbtoken} alt="token-logo" />
            <img src={Metatoken} alt="token-logo" />
            <img src={opensea} alt="token-logo" />
        </div>

        <main>
            <div className="main">
          <h1>Inspiration for your next adventure</h1>

          <div className="places-content">
            <div className="places">
              <div className="places-img">
                <img className="pics" src={a} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>

              <div className="places-img">
                <img className="pics" src={b} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>

              <div className="places-img">
                <img className="pics" src={c} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>

              <div className="places-img">
                <img className="pics" src={d} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>

              <div className="places-img">
                <img className="pics" src={e} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>

              <div className="places-img">
                <img className="pics" src={f} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>

              <div className="places-img">
                <img className="pics" src={g} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>

              <div className="places-img">
                <img className="pics" src={h} alt="resorts" />
                <div className="resort-details">
                  <p>Desert king</p>
                  <p className="cost">1MBT per night</p>
                </div>
                <div className="resort-details">
                  <p>2345km away</p>
                  <p>available for 2weeks stay</p>
                </div>
                <div className="stars">
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                  <img className="star" src={Star} alt="starpic" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>

        <section>
          <div className="meta-nft">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button> Learn more </button>
          </div>
          <div>
            <img className="nft-img" src={nft_img} alt="nft-img" />
          </div>
        </section>

        <footer>
          <ul className="lists">
            <li>
              <ul>
                <li>
                  <img
                    className="footer_logo"
                    src={Meta_footer}
                    alt="meta-footer"
                  />
                </li>
                <li>
                    <img className="social" src={facebook} alt="facebook-logo" />
                    <img className="social" src={instagram} alt="instagram-logo" />
                    <img className="social"  src={twitter} alt="twitter-logo" />
                </li>
                <li className="underlists">&copy; 2022 Metabnb</li>
              </ul>
            </li>

            <li>
              <h2>Community</h2>
              <ul className="underlists">
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </ul>
            </li>

            <li>
              <h2>Places</h2>
              <ul className="underlists">
                <li>Castle</li>
                <li>Farm</li>
                <li>Beach</li>
                <li>Learn more</li>
              </ul>
            </li>

            <li>
              <h2>About us</h2>
              <ul className="underlists">
                <li>Roadmaps</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
