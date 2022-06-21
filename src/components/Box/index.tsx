import styled from "styled-components";

interface BoxType {
  width?: string;
  height?: string;
  padding?: string;
  justify?: string;
  align?: string;
}

const Box = styled.div<BoxType>`
  display: flex;
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  box-sizing: border-box;
`;

export default Box;
