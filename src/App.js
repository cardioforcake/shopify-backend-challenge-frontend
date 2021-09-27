import ImageUpload from './components/ImageUpload/ImageUpload';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './services/firebase';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { fetchAllImages, fetchUserImages } from './services/service-functions';
import {useState, useEffect} from 'react';
import 'materialize-css';
import './App.css';

async function getUserImages(user,set){
  const usr = await fetchUserImages(user.uid);
  if(usr['imgs'].length!==0){
    let usrImgs =usr['imgs']
    set(usrImgs)
  }
}

async function getAllImages(set){
  const res = await fetchAllImages()
  if(res['imgs'].length!==0){
    let allImgs =res['imgs']
  set(allImgs)
  }
}

function App() {

  const [userState, setUserState] = useState({
    user: null,
  })

  const [images, setImages] = useState([{
    id: '',
    title: '',
    creator: '',
    url: ''
  }])

  const [userImages, setUserImages] = useState([{
    id: '',
    title: '',
    creator: '',
    url: ''
  }])

  useEffect(()=>{

    onAuthStateChanged(auth, (user)=>{
      setUserState({user})
    })

    if(userState.user){
      getUserImages(userState.user, setUserImages)
    }

  },[userState.user])

  useEffect(()=>{
    getAllImages(setImages)
  },[])

  return (
    <div className="App">
 
      <BrowserRouter>
        <Switch>
          <Route path="/upload" >
            <Header user={userState.user}/>
            <ImageUpload/>
          </Route>
          <Route path="">
            <Header user={userState.user}/>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
