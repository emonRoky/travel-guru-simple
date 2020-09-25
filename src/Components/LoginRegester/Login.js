import { Link } from '@material-ui/core';
import React, { useState, useRef, useContext } from 'react';
import SecondNav from '../secondNav/SecondNav';
import './Login.css';
import google from '../images/Icon/google.png';
import fb from '../images/Icon/fb.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import {useForm} from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname:"/"}}

    const [newUser, setNewUser] = useState(false);
    const { register, errors,handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:'',
        photo:''
      });

    const provider = new firebase.auth.GoogleAuthProvider();
    // const fbprovider = new firebase.auth.FacebookAuthProvider();

    const handelSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(result =>{
          const {displayName, email, photoURL} = result.user;
          const signedUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedUser);
        })
        .catch(error => {
          console.log(error.message);
        })
        }
        const handelBlur = (event)=>{
            let isFormValid = true;
            if(event.target.name === 'email'){
              isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
            }
            if(event.target.name === 'password'){
            //   const passLength = event.target.value.length > 8;
              const passHasNumber = /\d{1}/.test(event.target.value);
              isFormValid = passHasNumber;
            }
            if(event.target.name === 'confirmPass'){
                const passHasNumber = /\d{1}/.test(event.target.value);
                isFormValid = passHasNumber;
              }
            if(isFormValid){
              const userInfo = {...user};
              userInfo[event.target.name] = event.target.value;
              setUser(userInfo);
            }
          
          }
            
       
          const handleSignUp = (e) =>{
            if(newUser && user.email && user.password){
              firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
              .then(res => {
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
              })
              .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
            }
          if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
              const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setloggedInUser(newUserInfo);
                history.replace(from);
                console.log("sign in user info" , res.user);
            })
            .catch(error => {
              // Handle Errors here.
              const newUserInfo = {...user}
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo); 
            });
          }
          
            // e.preventDefault()
          }
          
          const updateUserName = name =>{
            var user = firebase.auth().currentUser;
              user.updateProfile({
                displayName: name
              }).then(function() {
                // Update successful.
                console.log("user name updated successfully");
              }).catch(function(error) {
                // An error happened.
                console.log(error);
              });
            }
    return (
        <div>
            <SecondNav></SecondNav>
            <div className="auth-section">
                <form onSubmit={handleSubmit(handleSignUp)} className="login">
                    <h4>Login Your Account</h4>
                    {/* <p style={{color:'red'}}>{user.error}</p> */}
                    {
                        user.error && <p style={{color:'red'}}>error occourd</p>
                    }
                    {
                        user.success && <p style={{color:'green'}}>user {newUser ? "created" :"logged In"} successfully</p>
                    }
                   {newUser && <div className="input-Place">
                                    <input type="text" onBlur={handelBlur} name="name" placeholder='Enter your Name'/>
                                </div>
                    }
                     <div className="input-Place">
                         <input type="text" onBlur={handelBlur} name="email"  placeholder='User name or Email'/>
                     </div>
                     <div className="input-Place">
                         <input type="password"
                          onBlur={handelBlur}  
                          name="password"
                          placeholder='Enter your password'
                          ref={register({
                            required: "You must specify a password",
                            minLength: {
                              value: 8,
                              message: "Password must have at least 8 characters"
                            }
                          })}
                          />
                           { newUser && errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}
                     </div>
                    {newUser && <div className="input-Place">
                         <input type="password"
                          onBlur={handelBlur} 
                          name="confirmPass" 
                          placeholder='confirm your password'
                          ref={register({
                            validate: value =>
                              value === password.current || "The passwords do not match"
                          })}/>
                          { newUser && errors.password_repeat && <p style={{color:'red'}}>{errors.password_repeat.message}</p>}}
                     </div>}
                   {newUser ? <div> </div>: <div className="edit-pass">
                         <div className="remember__me">
                            <input type="checkbox" name="remember" id="" placeholder="remember me"/>
                            <label htmlFor="remember"> remember me</label>
                         </div>
                         <div className="fotgot__pass">
                             <Link to="#">Forgot password?</Link>
                         </div>
                     </div>}
                     <input className='secundery__btn btn__extra' type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
                     {newUser ?<p onClick={()=>setNewUser(!newUser)} className='create__btn'>have an acount</p> :
                     <p onClick={()=>setNewUser(!newUser)} className='create__btn btn__extra'>create an acount</p>}
                </form>
                
               
            </div>
            <div className="thirdParty__auth">
                <div className="auth">
                    <div className="lines">
                        <p className="or">OR</p>
                    </div>
                    <div onClick={handelSignIn} className="google">
                        <img src={google} alt=""/>
                        <p className='google__txt'>Continue With</p>
                    </div>
                    <div className="google">
                        <img src={fb} className='pd' alt=""/>
                        <p className='google__txt'>Continue With</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;