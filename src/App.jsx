import CrazyBall from './components/CrazyBall';

function App() {
  return (
    <div className="App">
      <CrazyBall />
      <span style={{'fontSize': '20px', position: 'absolute', 'right': 0, 'bottom': 0, 'margin' : '20px', 'fontWeight': 'bold'}}>
        [ESC] : Pause Game <br/>
        [S] : Set Player Color
      </span>
    </div>
  );
}

export default App;
