import React from "react";
import { StyledWrapper, StyledTdImage, StyledTr, StyledTd } from "./Styled";

const CryptoItem = (props) => {
  const { market_data, image, symbol } = props.data;
  return (
    <StyledWrapper>
      <StyledTr onClick={props.onClick}>
        <StyledTd>{market_data.market_cap_rank}</StyledTd>
        <StyledTdImage>
          <img src={image.thumb} alt="currency img" />
          {symbol.toUpperCase()}
        </StyledTdImage>

        <StyledTd>$ {market_data.current_price.usd.toLocaleString()}</StyledTd>
        <StyledTd>
          {market_data.price_change_percentage_24h.toFixed(2)} %
        </StyledTd>
        <StyledTd> {market_data.total_volume.usd.toLocaleString()}</StyledTd>
        <StyledTd>{market_data.market_cap.usd.toLocaleString()}</StyledTd>
      </StyledTr>
    </StyledWrapper>
  );
};

export default CryptoItem;
