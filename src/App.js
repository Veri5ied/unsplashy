import "./App.css";
import SearchForm from "./component/form/SearchForm";
import UnsplashContextProvider from "./contexts/UnsplashContext";

function App() {
  return (
    <div className="App">
      <UnsplashContextProvider>
        <div className="container">
          <h1 className="title">Unsplashy Photo Search</h1>
          <SearchForm />
        </div>
      </UnsplashContextProvider>
    </div>
  );
}

export default App;
