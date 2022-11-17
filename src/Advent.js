import React from "react";
import "./Home.css";
import "./Advent.css";
import a from "./components/a.jpg";
import b from "./components/b.jpg";
import c from "./components/c.jpg";
import d from "./components/d.jpg";
import e from "./components/e.jpg";
import f from "./components/f.jpg";
import g from "./components/g.jpg";
import h from "./components/h.jpg";
import i from "./components/i.jpg";
import j from "./components/j.jpg";
import k from "./components/k.jpg";
import l from "./components/l.jpg";
import m from "./components/m.jpg";
import n from "./components/n.jpg";
import o from "./components/o.jpg";
import p from "./components/p.jpg";
import Star from "./components/Star.jpg";
import Meta_header from "./components/Meta_header.jpg";
import Meta_footer from "./components/Meta_footer.jpg";
import facebook from "./components/facebook.jpg";
import instagram from "./components/instagram.jpg";
import twitter from "./components/twitter.jpg";
import location from "./components/location.jpg";

const Home = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img className="meta_logo" src={Meta_header} alt="meta-header" />
          </div>
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

            <a href="/Popup"><button className="connect">Connect wallet</button></a>
          </nav>
        </div>

        <div className="to-visit">
          <ul className="places-list">
            <li className="vis">Resturant</li>
            <li className="vis">Cottage</li>
            <li className="vis">Castle</li>
            <li className="vis">Fantast city</li>
            <li className="vis">Beach</li>
            <li className="vis">Carbins</li>
            <li className="vis">Off-grid</li>
            <li className="vis">Farms</li>
            <li>
              <button className="location">Location<img className="location-logo" src={location} alt="location-logo" /></button>
            </li>
          </ul>
        </div>

        <main>
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

              <div className="places-img">
                <img className="pics" src={i} alt="resorts" />
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
                <img className="pics" src={j} alt="resorts" />
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
                <img className="pics" src={k} alt="resorts" />
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
                <img className="pics" src={l} alt="resorts" />
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
                <img className="pics" src={m} alt="resorts" />
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
                <img className="pics" src={n} alt="resorts" />
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
                <img className="pics" src={o} alt="resorts" />
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
                <img className="pics" src={p} alt="resorts" />
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
        </main>

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
                  <img
                    className="social"
                    src={instagram}
                    alt="instagram-logo"
                  />
                  <img className="social" src={twitter} alt="twitter-logo" />
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
