import styled from "styled-components";


const Box = styled.div`
  padding : 10px;
  border-radius : 8px;
  overflow : hidden;
  margin : 10px auto;
  transition : all 0.3s cubic-bezier(0.42, 0.0, 0.58, 1.0);
  background-color : ${props => props.theme.textColor};
  &:hover{
    box-shadow : 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform : translateY(-10px);
  }
`;
const BoxTitle = styled.h1`
  color : ${props => props.theme.accentColor};
  font-size : 14px;
`;
const BoxData = styled.span`
  color : ${props => props.theme.accentColor};
  display : flex;
  flex-direction : column;
  font-size : 14px;
  font-weight : 400;
  color : #666;
  padding : 0;
`;

interface PriceProps {
  data : any;
}

function Price({data} : PriceProps) {

  return (
    <>
      <Box>
        <BoxTitle> Highst Price  </BoxTitle>
        <BoxData> 68692.137 </BoxData>
      </Box>
      <Box>
        <BoxTitle> Date </BoxTitle>
        <BoxData> 2021-11-10T16:51:15Z </BoxData>
      </Box>
      <Box>
         <BoxTitle> Percent from present </BoxTitle>
         <BoxData> -69.62 % </BoxData>
       </Box>
    </>
    /* CORS Error,, bb
    <>
      <Box>
        <BoxTitle> Highst Price  </BoxTitle>
        <BoxData> {data.ath_price} </BoxData>
      </Box>
      <Box>
        <BoxTitle> Date </BoxTitle>
        <BoxData> {data.ath_date} </BoxData>
      </Box>
      <Box>
         <BoxTitle> Percent from present </BoxTitle>
         <BoxData> {`${data.percent_from_price_ath}%`} </BoxData>
       </Box>
    </>
    */
  );
}
  
  export default Price;