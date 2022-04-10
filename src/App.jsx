import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MovielistPage from "./pages/Movielist";

function App() {
  return (
    <div className="my-component">
      <NavBarComp />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/movies" element={<MovielistPage />}></Route>
        <Route path="/register" element={<SignInPage />}></Route>
        <Route path="/details" element={<DetailPage />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
