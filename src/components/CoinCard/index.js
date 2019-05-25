import React from 'react';

import { images } from '../../Utils/icons';

import {
  Container,
  UpperRow,
  Image,
  CoinSymbol,
  Separator,
  CoinName,
  CoinPrice,
  MoneySymbol,
  StatsContainer,
  Text,
  TextPercentChange
} from './styles';

import { roundValue } from '../../Utils/maths';

/**
 * TODO: Improvement => currency with dynamic selector based on user choice
 */
const CoinCard = ({
  id,
  symbol,
  name,
  quote: {
    GBP: { price, percent_change_24h, percent_change_7d }
  }
}) => {
  return (
    <Container key={id}>
      <UpperRow>
        <Image source={{ uri: images[symbol] }} />
        <CoinSymbol>{symbol}</CoinSymbol>
        <Separator>|</Separator>
        <CoinName>{name}</CoinName>
        <CoinPrice>
          {roundValue(price)}
          <MoneySymbol> £ </MoneySymbol>
        </CoinPrice>
      </UpperRow>

      <StatsContainer>
        <Text>
          24h:
          <TextPercentChange minus={percent_change_24h < 0}>
            {' '}
            {roundValue(percent_change_24h)} %{' '}
          </TextPercentChange>
        </Text>
        <Text>
          7d:
          <TextPercentChange minus={percent_change_7d < 0}>
            {' '}
            {roundValue(percent_change_7d)} %{' '}
          </TextPercentChange>
        </Text>
      </StatsContainer>
    </Container>
  );
};

export default CoinCard;
