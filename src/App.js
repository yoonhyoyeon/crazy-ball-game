import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './components/Test';

const Hello = styled.div`
  color: red;
  font-size: 3rem;
  text-align: center;
`;
function App() {
  return (
    <BrowserRouter>
      <Hello>공통</Hello>
      <Routes>
					<Route path="/" element={<h2>hello world!:)</h2>}></Route>
					<Route path="/test/:id" element={<Test />}></Route>
					<Route path="*" element={<h3>not found</h3>}></Route>
				</Routes>
    </BrowserRouter>
    
  );
}

export default App;
