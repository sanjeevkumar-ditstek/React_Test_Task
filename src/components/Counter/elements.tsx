import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 90vh;
  background-color: #004761;

  @media screen and (max-width: 480px) {
    height: 100vh;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  height: 50vh;
  background-color: #004761;
`;

export const Button = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 160px;
  height: min-content; /* 61px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-family: "Inter-Bold", "Inter", sans-serif;
  font-size: 24px;
  padding: 16px;
  background-color: #ffffff;
  overflow: visible;
  border-radius: 24px;
  border: none;
`;
export const Count = styled.h3`
  flex-shrink: 0;
  width: 160px;
  height: 71px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-weight: 700;
  font-family: "Inter-Bold", "Inter", sans-serif;
  color: #8cd6bd;
  font-size: 64px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
`;
