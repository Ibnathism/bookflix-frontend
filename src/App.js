import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./theme/global";
import DetailsView from "./views/BookDetails";
import HomeView from "./views/Home";
import LoginView from "./views/Login";
import SignupView from "./views/Signup";
import MyListView from "./views/MyList";
import TestView from "./views/TestView";
import BookReaderView from "./views/BookReader";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://13.250.6.97/graphql/",
    //uri: "https://graphql-weather-api.herokuapp.com/",
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={LoginView} />
        <Route path="/login" exact component={LoginView} />
        <Route path="/signup" exact component={SignupView} />
        <Route path="/home" exact component={HomeView} />
        <Route path="/home/:id" exact component={DetailsView} />
        <Route path="/list" exact component={MyListView} />
        <Route path="/read" exact component={BookReaderView} />
        <Route path="/test" exact component={TestView} />
        <GlobalStyles />
      </Router>
    </ApolloProvider>
  );
}

export default App;
