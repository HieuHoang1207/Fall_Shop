import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ethers } from "ethers";

// Components
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Product from "./components/Product";
import News from "./components/News";
import Pageproduct from "./components/Pageproduct";
import Contact from "./components/Contact";
import Introduce from "./components/Introduce";
// ABIs
import Dappazon from "./abis/Dappazon.json";

// Config
import config from "./config.json";

function App() {
  const [provider, setProvider] = useState(null);
  const [dappazon, setDappazon] = useState(null);

  const [account, setAccount] = useState(null);

  const [electronics, setElectronics] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [toys, setToys] = useState(null);

  const [item, setItem] = useState({});
  const [toggle, setToggle] = useState(false);

  const togglePop = (item) => {
    setItem(item);
    toggle ? setToggle(false) : setToggle(true);
  };

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();
    console.log("Network: ", network);

    const dappazon = new ethers.Contract(
      config[network.chainId].dappazon.address,
      Dappazon,
      provider
    );
    setDappazon(dappazon);
    console.log("dappazon: ", dappazon);

    const items = [];

    for (let i = 0; i < 9; i++) {
      try {
        const item = await dappazon.items(i + 1); // Đảm bảo i + 1 khớp với chỉ số trong contract
        items.push(item);
      } catch (error) {
        console.error(`Error fetching item at index ${i + 1}:`, error);
      }
    }

    const electronics = items.filter((item) => item.category === "electronics");
    const clothing = items.filter((item) => item.category === "clothing");
    const toys = items.filter((item) => item.category === "toys");

    setElectronics(electronics);
    setClothing(clothing);
    setToys(toys);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div class="main">
      <Navigation account={account} setAccount={setAccount} />

      <Router>
        <div>
          {/* Navbar with links */}
          <div class="brown-nav">
            <nav class="brown-nav">
              <ul className="nav__links">
                <li>
                  <Link to="/">
                    <a class="nav-link">Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/news">
                    <a class="nav-link">News</a>
                  </Link>
                </li>
                <li>
                  <Link to="/pageproduct">
                    <a class="nav-link">Product</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <a class="nav-link">Contact</a>
                  </Link>
                </li>
                <li>
                  <Link to="/introduce">
                    <a class="nav-link">Introduce</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Routes */}
          <Routes>
            {/* Trang chủ, nơi hiển thị Best Sellers */}
            <Route
              path="/"
              element={
                <>
                  <ul className="nav__links">
                    <li>
                      <a href="#Ulzzang long sleeve shirt">
                        Ulzzang long sleeve shirt
                      </a>
                    </li>
                    <li>
                      <a href="#Short sleeve shirt">Short sleeve shirt</a>
                    </li>
                    <li>
                      <a href="#Unisex Hat">Unisex Hat</a>
                    </li>
                  </ul>
                  <h2>Fall Best Sellers</h2>

                  {electronics && clothing && toys && (
                    <>
                      <Section
                        title={"Ulzzang long sleeve shirt"}
                        items={clothing}
                        togglePop={togglePop}
                      />
                      <Section
                        title={"Short sleeve shirt"}
                        items={electronics}
                        togglePop={togglePop}
                      />
                      <Section
                        title={"Unisex Hat"}
                        items={toys}
                        togglePop={togglePop}
                      />
                    </>
                  )}

                  {toggle && (
                    <Product
                      item={item}
                      provider={provider}
                      account={account}
                      dappazon={dappazon}
                      togglePop={togglePop}
                    />
                  )}
                </>
              }
            />

            {/* Trang News */}
            <Route path="/news" element={<News />} />
            <Route path="/pageproduct" element={<Pageproduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/introduce" element={<Introduce />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
