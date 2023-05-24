import React, { Component } from 'react';
import WtrResult from './wtrRes';
import dataPuller from '../utils/api';

class WtrCardContainer extends Component {

  state = {
    isLoading: true,
    dataPuller: '',
    results: [],
  };

  componentDidMount() {
    this.callApi('dailysummary');
  };

  callApi = (endPoint) => {
    dataPuller(endPoint)
      .then(res => {
        this.setState({ results: res.data });
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <div className="text-center">Loading...</div>
    }
    return (
      <>
        <WtrResult results={this.state.results} />
      </>
    )
  }
}

export default WtrCardContainer;
