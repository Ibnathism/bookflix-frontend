import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./theme/global";
import DetailsView from "./views/BookDetails";
import HomeView from "./views/Home";
import LoginView from "./views/Login";
import SignupView from "./views/Signup";
import OnboardingView from "./views/OnboardingView";
import MyListView from "./views/MyList";
//import TestView from "./views/TestView";
import BookReaderView from "./views/BookReader";
function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/signup" exact component={SignupView} />
      <Route path="/onboarding" exact component={OnboardingView} />
      <Route path="/home" exact component={HomeView} />
      <Route path="/home/:id" exact component={DetailsView} />
      <Route path="/list" exact component={MyListView} />
      <Route path="/read" exact component={BookReaderView} />
      <GlobalStyles />
    </Router>
  );
}

export default App;
