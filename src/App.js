import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Product from './Product/Product';
import ProductViewer from './ProductViewer/ProductViewer';
import Search from './Search/Search';
import Checkout from './Checkout/Checkout';
import Payment from './Payment/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {auth, handleUserProfile} from './firebase/utils';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentUser} from './redux/User/userActions';
import Login from './Login';
import { fetchProductStart } from './redux/Products/productActions'

const mapState = ({user}) => ({
  isLogged : user.isLogged,
  currentUser : user.currentUser
});

function App() {
  const dispatch = useDispatch();
  const {isLogged} = useSelector(mapState);
  useEffect(()=>{
    const authListener = auth.onAuthStateChanged(async user => {
          if(user !== null){
          const userRef = await handleUserProfile(user);
          userRef.onSnapshot(snapshot => {
            dispatch(setCurrentUser({    
                currentUser:{
                  id: snapshot.id,
                ...snapshot.data()
                            },
                isLogged: true
             }));
            })
         }
         else{
           dispatch(setCurrentUser({
             currentUser:user,
             isLogged: false
           }));
          }
         dispatch(fetchProductStart());
      });


    return () => {
        authListener();
    };
  }, [setCurrentUser]);
  

    return (
        <div>
          <Switch>
            <Route exact path='/login'>
              <Header />
              <Login />
            </Route>
            <Route exact path='/product'>
              <Header/>
              <ProductViewer />
            </Route>
            <Route exact path='/search' >
              <Header />
              <Search />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />        
            </Route>
            <Route exact path='/payment' render={()=> isLogged ? (
              <>
              <Header />
              <Payment />
              </>
            ) : (<Redirect to='/login' />)} />
            <Route exact path='/'>
              <Header />
              <Home />
              <Product />
            </Route>
          </Switch>
        </div>
        );
  }

export default App;
