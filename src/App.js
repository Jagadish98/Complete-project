import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Product from './Product/Product';
import ProductViewer from './ProductViewer/ProductViewer';
import Checkout from './Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {auth, handleUserProfile} from './firebase/utils';

const initialState = {
  currentUser : null,
  isLogged: false
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(async user => {
          if(user !== null){
          const userRef = await handleUserProfile(user);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              },
              isLogged: true
            })
          })
          } 
          else{
            this.setState({
              currentUser: user,
              isLogged: false
            });
          }
      })
  };

  componentWillUnmount(){
    this.authListener();
  };

  render(){
    const {isLogged} = this.state;
    return (
        <div>
          <Switch>
            <Route exact path='/product'>
              <Header currentUser={isLogged}/>
              <ProductViewer />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />        
            </Route>
            <Route exact path='/'>
              <Header currentUser={isLogged}/>
              <Home />
              <Product />
            </Route>
          </Switch>
        </div>
        );
  }

  
}

export default App;
