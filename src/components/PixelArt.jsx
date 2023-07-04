import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const ColorContext = createContext({
  color: 'lightGrey',
  setColor: () => {},
});

const ColorPicker = () => {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
  const { setColor } = useContext(ColorContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setColor(color)}
          style={{ backgroundColor: color, margin: '5px', padding: '20px' }}
        />
      ))}
    </div>
  );
};

const Pixel = () => {
  const { color } = useContext(ColorContext);
  const [pixelColor, setPixelColor] = useState('lightGrey');

  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        height: '20px',
        width: '20px',
        backgroundColor: pixelColor,
        margin: '1px',
        padding: '5px',
      }}
    />
  );
};

const Pixels = () => {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        width: '88%',
        margin: '20px auto',
      }}
    >
      {pixels}
    </div>
  );
};

const PixelArt = () => {
  const [color, setColor] = useState('lightGrey');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  );
};

export default PixelArt;
