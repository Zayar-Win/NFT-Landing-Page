import Choose from "./components/Choose";
import Client from "./components/Client";
import CreateAndSell from "./components/CreateAndSell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MarketPlace from "./components/MarketPlace";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className='App'>
      <Home />
      <Client />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
