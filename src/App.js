import logo from './logo.svg';
import Card from './components/Card'
import './App.css';
import tehtavat from './tehtavat.json'
function App() {
  return (
    <div className="App">
      <Card tehtavat= {tehtavat}> 
         </Card>
    </div>
  );
}

export default App;
