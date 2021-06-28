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
  gql,
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
  const defaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    link: authLink.concat(httpLink),
    typeDefs: gql`
      enum AddOrRemove {
        add
        remove
      }
    `,
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
