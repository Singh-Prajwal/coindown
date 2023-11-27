// Coin.js
import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import styled from "styled-components"
import Pagination from "./pagination"
import NavigationBar from "./navigation-bar"
import Switch from "react-switch"
import Footer from "./footer"

function Coin({ className }) {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [count, setCount] = useState(0)
  const perPage = 10

  const fetchCoins = async () => {
    try {
      const response = await axios({
        // url: `https://api.minerstat.com/v2/coins`,
        url: `
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response)
      setCoins(response.data)
      setCount(response.data?.length)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchCoins()
    const intervalId = setInterval(() => {
      fetchCoins()
    }, 60000)
    return () => clearInterval(intervalId)
  }, [pageNumber])
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className={`${className}`}>
      <Container
        fluid
        className={`${className} coin-container ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <NavigationBar darkMode={darkMode} />
        <div className="background-container">
          <div className="falling-coins">$</div>
        </div>
        <div className=" dark-mode-toggle">
          <label className="d-flex flex-row align-items-center">
            <Switch
              onChange={toggleDarkMode}
              checked={darkMode}
              onColor="#333"
              onHandleColor="#fff"
              handleDiameter={24}
              height={28}
              width={56}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              className="react-switch"
              id="material-switch"
            />
            <strong>
              Dark Mode
            </strong>
          </label>
        </div>
        <img className="img-container" src="./COIN_BG_TEXT.jpeg" alt="Background" />
        <div className={`${className} market-value`}>
          <Row className={`${className} list-element background text-white ${darkMode ? "dark-mode" : "light-mode"}`}>
            <Col className="Space-l center" sm={3}>Coin</Col>
            <Col className="Space-l" sm={3}>Name</Col>
            <Col className="Space-l" sm={3}>Price</Col>
            <Col className="Space-l" sm={3}>24hr % Change</Col>
          </Row>
          {coins.map((coin) => (
            <Row
              key={coin.id}
              className={`${className} Space-l center list-element ${darkMode ? "dark-mode" : "light-mode"}`}
            >
              <Col><img className="coin-img " src={`${coin.image}`}></img></Col>
              <Col>
                <strong>{coin.name}</strong>
              </Col>
              <Col>${coin.current_price}</Col>
              {/* <Col>{coin.market_cap_change_percentage_24h}%</Col> */}
              <Col className={coin.market_cap_change_percentage_24h < 0 ? "danger-bg" : "success-bg"}>
                {coin.market_cap_change_percentage_24h}%
              </Col>
            </Row>
          ))}
        </div>
        {coins ? (
          <Pagination currentPage={pageNumber} setCurrentPage={setPageNumber} perPage={5} />
        ) : (
          <></>
        )}
        <Footer/>
      </Container>
    </div>
  )
}

export default styled(Coin)`
  .coin-container {
    width: 100%;
    min-height: 100vh; 
    margin: 0;
    padding: 0;
    border-radius: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  .danger-bg {
    background-color: #ffdddd; 
    padding:0.5rem
  }

  .success-bg {
    background-color: #ddffdd; 
  }
  .coin-img{
    width: 45%;
  }
  .img-container {
    height: 65%;
    width: 80%;
    border-radius:10px;
    margin-top:3.5rem;
    margin-bottom: 20px; 
  }
   .background-container {
    position: fixed;
    top: 50;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .falling-coins {
    width: 20px;
    height: 20px;
    background-color: #ffd700; /* Coin color */
    border-radius: 50%;
    position: absolute;
    animation: fallAnimation linear infinite;
  }

  @keyframes fallAnimation {
    0% {
      transform: translateY(-100vh) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }

  .list-element {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }

  strong {
    transition: color 0.3s ease;
  }
  .dark-mode {
    background-color: #333333;
    color: #ffffff;
  }

  .dark-mode .list-element {
    background-color: #444444;
  }

  .dark-mode strong {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    .img-container {
      width: 100%;
      height: auto;
    }

    .dark-mode-toggle {
      top: 5%;
      left: 70%;
    }
  }
  .light-mode {
    background-color: #f0f0f0;
    color: #333333;
  }

  .light-mode .list-element {
    background-color: #ffffff;
  }
  .dark-mode-toggle {
    position: absolute;
    top:15%;
    left:80%;
    z-index:1;
  }
  .light-mode strong {
    color: #333333;
  }

  .market-value {
    /* Add additional styles as needed */
  }
`
