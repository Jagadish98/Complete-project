import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Product from './Product/Product';
import ProductViewer from './ProductViewer/ProductViewer';
import Checkout from './Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {auth, handleUserProfile} from './firebase/utils';
import {useDispatch} from 'react-redux';
import { setCurrentUser } from './redux/User/userActions';


function App() {
  const dispatch = useDispatch();

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

      });


    return () => {
        authListener();
    };
  }, [setCurrentUser]);
  

    return (
        <div>
          <Switch>
            <Route exact path='/product'>
              <Header/>
              <ProductViewer />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />        
            </Route>
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
