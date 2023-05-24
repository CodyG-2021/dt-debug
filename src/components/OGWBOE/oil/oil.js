import React, { Component } from 'react';
import OilResult from './oilResult';
import dataPuller from '../utils/api';

class OilCardContainer extends Component {

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
      // .then((res) => this.setState({ results: res.data, isLoading: false }))
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
        <OilResult results={this.state.results} />
      </>
    )
  }
}

export default OilCardContainer;

// const OilCard = () => {
//   const token = localStorage.getItem('token')
//   let oilDataToday = '';
  
//   axios.get('https://api.pramsplus.com/dailysummary', { headers: {"Authorization" : `Bearer ${token}`} })
//   .then(response => {
//   // console.log(response)
//   // console.log(response.data)
//   const dsSummaryData = response.data
//   console.log(dsSummaryData[7].oil)
//   oilDataToday = dsSummaryData[7].oil;
//   return oilDataToday;
//   });

//   return (
//     <div>
//       Today: {oilDataToday}
//       Yesterday:
//     </div>
//   );
// };

// export default OilCard;