import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Rank,
  SubHeader,
  Container,
  SectionWrapper,
  Paragraph,
  ImageWrapper,
  Price,
  MarketWrapper,
  TableWrapper,
  TitleTh,
  TableBody,
  TableData,
  Line,
  Text,
} from "./Styled";

const CryptoDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { name, image, market_data, market_cap_rank, symbol, description } =
    data;
  const tagRegExp = new RegExp("<s*[^>]*>", "g");
  const about = description?.en.replace(tagRegExp, "");
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(data);
  return (
    <Container>
      <SubHeader>{name}</SubHeader>
      <SectionWrapper>
        <Rank>Rank # {market_cap_rank}</Rank>
        <ImageWrapper>
          <img src={image?.small} alt="saga" />
          <Paragraph>{name}</Paragraph>
          <Paragraph>{symbol?.toUpperCase()}/USD</Paragraph>
          <Price>$ {market_data?.current_price.usd.toLocaleString()}</Price>
        </ImageWrapper>
      </SectionWrapper>

      <TableWrapper>
        <thead>
          <tr>
            <TitleTh>1h</TitleTh>
            <TitleTh>24h</TitleTh>
            <TitleTh>7d</TitleTh>
            <TitleTh>14d</TitleTh>
            <TitleTh>30d</TitleTh>
            <TitleTh>1y</TitleTh>
          </tr>
        </thead>
        <TableBody>
          <tr>
            <TableData>
              {market_data?.price_change_percentage_1h_in_currency.usd.toFixed(
                4
              )}
              %
            </TableData>
            <TableData>
              {market_data?.price_change_percentage_24h.toFixed(4)}%
            </TableData>
            <TableData>
              {market_data?.price_change_percentage_7d?.toFixed(4)}%
            </TableData>
            <TableData>
              {market_data?.price_change_percentage_14d?.toFixed(4)}
            </TableData>
            <TableData>
              {market_data?.price_change_percentage_30d?.toFixed(4)}%
            </TableData>
            <TableData>
              {market_data?.price_change_percentage_1y?.toFixed(4)}%
            </TableData>
          </tr>
        </TableBody>
      </TableWrapper>
      <SectionWrapper>
        <MarketWrapper>
          <div>
            <Text>
              24 Hour Low
              <span>$ {market_data?.low_24h.usd.toLocaleString()}</span>
            </Text>
            <Line></Line>
          </div>

          <div>
            <Text>
              Market Cap
              <span>$ {market_data?.market_cap.usd.toLocaleString()}</span>
            </Text>
            <Line></Line>
          </div>
        </MarketWrapper>

        <MarketWrapper>
          <div>
            <Text>
              24 Hour High
              <span>${market_data?.high_24h.usd.toLocaleString()}</span>
            </Text>
            <Line></Line>
          </div>
          <div>
            <Text>
              Circulating Supply
              <span>{market_data?.circulating_supply.toFixed(0)}</span>
            </Text>
            <Line></Line>
          </div>
        </MarketWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <Paragraph>About</Paragraph>
        <Paragraph>{about}</Paragraph>
      </SectionWrapper>
    </Container>
  );
};

export default CryptoDetails;
