import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import "./App.scss";
import Filter from './components/FooterFilters.jsx';

function App() {

  return (
    <>
      <main>
        
        <Header appName="To-Do List with React" />

        <Home />

        <Filter/>
        
      </main>
    </>
  )
}

export default App
