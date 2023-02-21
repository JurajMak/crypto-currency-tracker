import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoItem from "../../components/CryptoItem/CryptoItem";
import { StyledTable, StyledTh } from "./Styled";
import { useNavigate } from "react-router-dom";

const Crypto = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (e, id) => {
    navigate(`${id}`);
  };

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>#</StyledTh>
            <StyledTh>Coins</StyledTh>
            <StyledTh>Price</StyledTh>
            <StyledTh>24h</StyledTh>
            <StyledTh>Volume</StyledTh>
            <StyledTh>Mkt cap</StyledTh>
          </tr>
        </thead>
        {data?.map((item) => {
          return (
            <CryptoItem
              key={item.id}
              data={item}
              onClick={(e) => handleClick(e, item.id)}
            />
          );
        })}
      </StyledTable>
    </div>
  );
};

export default Crypto;
