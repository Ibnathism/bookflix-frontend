import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./theme/global";
import DetailsView from "./views/BookDetails";
import HomeView from "./views/Home";
import LoginView from "./views/Login";
import SignupView from "./views/Signup";
import OnboardingView from "./views/OnboardingView";
import MyListView from "./views/MyList";
import TestView from "./views/TestView";
import BookReaderView from "./views/BookReader";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function App() {
  const httpLink = createHttpLink({
    uri: "http://13.250.6.97/graphql/",
  });
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("bookflix-token");

    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : "",
      },
    };
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    //uri: "http://13.250.6.97/graphql/",
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
        <Route path="/onboarding" exact component={OnboardingView} />
        <Route path="/test" exact component={TestView} />
        <GlobalStyles />
      </Router>
    </ApolloProvider>
  );
}

export default App;
