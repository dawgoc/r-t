import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import Nav from "./Nav";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./configs/apollo";
import store from "./configs/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Nav />
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
