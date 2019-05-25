import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchCoinData from '../../redux/Actions/FetchCoinData';

import SpinnerWrapper from './components/SpinnerWrapper';
import { ScrollContainer } from './styles';
import CoinCard from '../CoinCard';

class CryptoContainer extends Component {
  componentDidMount() {
    const { fetchCoinData } = this.props;
    fetchCoinData();
  }

  render() {
    const { isFetching, data } = this.props;

    return (
      <>
        {isFetching ? (
          <SpinnerWrapper visible={isFetching} />
        ) : (
          <ScrollContainer
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => <CoinCard {...{ ...item }} />}
          />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.crypto.isFetching,
    data: state.crypto.data
  };
}

export default connect(
  mapStateToProps,
  { fetchCoinData }
)(CryptoContainer);
