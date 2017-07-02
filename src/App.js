import React, {Component} from "react";
import {ApolloClient, gql, graphql, ApolloProvider, createNetworkInterface} from "react-apollo";
import {makeExecutableSchema} from "graphql-tools";
import {typeDefs} from "./schema";
import logo from "./logo.svg";
import "./App.css";

const schema = makeExecutableSchema({typeDefs});
const networkInterface = createNetworkInterface({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({ networkInterface: networkInterface });

const IdeasList = ({ data: {loading, error, ideas }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   if (ideas) {
     return <ul>
       { ideas.map( idea => <li key={idea.id}>{idea.text}</li> ) }
     </ul>;
   }
   return null;
 };

const ideasListQuery = gql`
  query IdeasListQuery {
    ideas {
      id
      text
      created
    }
  }
`;

const IdeasListWithData = graphql(ideasListQuery)(IdeasList);

class App extends Component {
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    };
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.login();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <IdeasListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
