import * as React from 'react';
import RedpackRain from './RedpackRain';
import './App.css';

export default () => {
  const rainRef: any = React.useRef();
  React.useEffect(() => {
    const rain = new RedpackRain({
      selector: '.rain-container',
      redpack: {
        imgUrl: 'https://commandnotfound.cn/img/commandnotfound-32x32.png'
      }
    });
    rainRef.current = rain;
    rain.start();

    return () => rain.stop();
  }, []);

  const handleStopClick = () => {
    if (rainRef.current) {
      rainRef.current.stop();
    }
  };

  return (
    <div className="App">
      <button onClick={handleStopClick}>停止</button>
      <div className="rain-container" />
    </div>
  );
};