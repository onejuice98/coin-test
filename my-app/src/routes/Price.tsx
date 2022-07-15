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
/* option 구성하기!
interface IPriceOption {
	option : number;
}*/
function Price({data} : PriceProps) {
  //const [option, setOption] = useState(1);
  
  return (

    
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

	  	<Box>
         <BoxTitle> Percent change 1hour </BoxTitle>
         <BoxData> {`${data.percent_change_1h}%`} </BoxData>
       </Box>
	  	  	<Box>
         <BoxTitle> Percent change 7days </BoxTitle>
         <BoxData> {`${data.percent_change_7d}%`} </BoxData>
       </Box>
	  	  	  	<Box>
         <BoxTitle> Percent change 30days </BoxTitle>
         <BoxData> {`${data.percent_change_30d}%`} </BoxData>
       </Box>
	  	  	  	  	<Box>
         <BoxTitle> Percent change 1year </BoxTitle>
         <BoxData> {`${data.percent_change_1y}%`} </BoxData>
       </Box>
    </>
    
  );
}
  
  export default Price;