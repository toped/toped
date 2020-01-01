import styled from "styled-components";
import bg from "../../assets/imgs/header-img.jpg";

export const FullPageDiv = styled.div`
  height: 100vh;
  box-sizing: border-box;
  background: -webkit-gradient(
        linear,
        0% 0%,
        100% 0%,
        from(rgba(44, 67, 90, 0.75)),
        to(rgba(31, 43, 55, 0.75))
      )
      0% 0% / cover,
    url(${bg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export default FullPageDiv;
