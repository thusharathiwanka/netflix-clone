import "./App.css";
import Row from "./components/Row";
import request from "./config/request";

function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
