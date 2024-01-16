import { Box } from "@mui/material";
import styled from "styled-components";
import LoadingDots from "../../src/assets/pre.svg"

function LoadingSpinner() {
      return (
            <Styled.Loader>
            </Styled.Loader>
      )
}
export default LoadingSpinner;

const Styled = {
Loader: styled(Box)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 999999;
background-color: #fff;
background-image: url(${LoadingDots});
background-repeat: no-repeat;
background-position: center;
`
}