import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #04050f44;
  color: white;
  font-family: "Arial", sans-serif;
`;

export const Canvas = styled.canvas`
  border: 2px solid #444;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  cursor: crosshair;
  background-color: #fff;
  max-width: 1000px;
  max-height: 100%;
`;

export const Controls = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`;

export const ColorPicker = styled.input`
  width: 50px;
  height: 50px;
  border: 2px solid #6200ea;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.1);
    border-color: #3700b3;
  }

  &:focus {
    outline: none;
    border-color: #3700b3;
    box-shadow: 0 0 5px rgba(55, 0, 179, 0.5);
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #6200ea;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #3700b3;
  }

  &:active {
    transform: scale(0.95);
  }
`;
