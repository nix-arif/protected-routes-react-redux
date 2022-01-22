import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchUserIsAuthenticated } from "./redux";
import { connect } from "react-redux";

const Home = () => <h1>Home (Public)</h1>;
const About = () => <h1>About (Public)</h1>;
const Login = (props) => {
  const { fetchUserIsAuthenticated } = props;
  const handleLogin = () => {
    fetchUserIsAuthenticated();
  };
  return (
    <div>
      <h1>Login (Public)</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Setting = () => <h1>Setting (Private)</h1>;
const Dashboard = () => <h1>Dashboard (Private)</h1>;

function RequireAuth(props) {
  const { isAuthed, children } = props;
  console.log("RequireAuth:", props);
  return isAuthed ? { children } : <Navigate to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserIsAuthenticated: () => dispatch(fetchUserIsAuthenticated()),
  };
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
const RequireAuthWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(RequireAuth);

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/setting"
          element={
            <RequireAuthWrapper>
              <Setting />
            </RequireAuthWrapper>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuthWrapper>
              <Dashboard />
            </RequireAuthWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
