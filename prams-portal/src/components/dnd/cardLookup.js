import styled from "styled-components";
import handleClick from "./cardAdder";
import OilCardContainer from "../OGWBOE/oil/oil";
import GasCardContainer from "../OGWBOE/gas/gas";
import WtrCardContainer from "../OGWBOE/wtr/wtr";

const Container = styled.div`
  border: 0px solid;
  border-radius: 25px;
  background-color: white;
  //box-shadow: 0px 0px 1px black;
  min-height: 366px;
  max-height: 366px;
  padding: 15px;
`;

function CardLookup({ cardType, cardContent }) {
  switch (cardType) {
    case 0:
      return cardContent;
    case 1:
      return (
        <Container>
          <button className="btn btn-primary" onClick={handleClick}>Add New Card</button>
        </Container>
      );
    case 2:
      return (
        <Container>
          <OilCardContainer />
        </Container>
      );
    case 3:
      return (
        <Container>
          <GasCardContainer />
        </Container>
      );
    case 4:
      return (
        <Container>
          <WtrCardContainer />
        </Container>
      );
    default:
      console.log(`Out of Expressions`);
  }
}

export default CardLookup;

// if(cardType === 1) {
//   console.log(cardType)
//   return (
//     <Container>
//       Hello
//     </Container>
//   )
// } else {
//   console.log(cardContent)
//   return 'console.log(cardContent)'
// };
