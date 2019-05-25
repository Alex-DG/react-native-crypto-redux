import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  margin-bottom: 20;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 3;
  padding: 20px;
`;

export const UpperRow = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15;
`;

export const CoinSymbol = styled.Text`
  margin-top: 10;
  margin-left: 20;
  margin-right: 5;
  font-weight: bold;
`;

export const CoinName = styled.Text`
  margin-top: 10;
  margin-left: 5;
  margin-right: 20;
`;

export const CoinPrice = styled.Text`
  margin-top: 10;
  margin-left: auto;
  margin-right: 10;
  font-weight: bold;
`;

export const Separator = styled.Text`
  margin-top: 10;
`;

export const Image = styled.Image`
  width: 35;
  height: 35;

  background: grey;
  border-radius: 18;
`;

export const MoneySymbol = styled.Text`
  font-weight: bold;
`;

export const StatsContainer = styled.View`
  display: flex;
  border-top-color: #fafafa;
  border-top-width: 2;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextPercentChange = styled.Text`
  color: ${({ minus }) => (minus ? '#dd2c00' : '#00bfa5')};
  font-weight: bold;
  margin-left: 5;
`;

export const Text = styled.Text``;
