import React, { useRef, useState } from "react";
import GlobalStyles from "./../styles/globalStyles";
import { Button, Canvas, ColorPicker, Container, Controls } from "./style";

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState<string>("black");
  const [isErasing, setIsErasing] = useState<boolean>(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx!.strokeStyle = isErasing ? "white" : color;
      ctx!.lineWidth = 5;
      ctx!.beginPath();
      ctx!.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    ctx!.lineTo(e.offsetX, e.offsetY);
    ctx!.stroke();
  };

  const handleMouseUp = () => {
    const canvas = canvasRef.current;
    canvas?.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Canvas
          ref={canvasRef}
          width={800}
          height={600}
          onMouseDown={handleMouseDown}
        />
        <Controls>
          <ColorPicker
            type="color"
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setColor(e.target.value)}
          />
          <Button onClick={() => setIsErasing(!isErasing)}>
            {isErasing ? "Usar Pincel" : "Usar Borracha"}
          </Button>
        </Controls>
      </Container>
    </>
  );
};

export default App;
