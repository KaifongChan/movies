import { useState } from 'react';
import './App.css'
import Testing from './components/Testing';
import Contents from './components/Contents';
// import Header from './components/Header'
// import Introduction from './components/Introduction'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "" });
  const [permanentUserDetails, setPermanentUserDetails] = useState("");

  // if (loggedIn) {
  //   setPermanentUserDetails(userDetails);
  // }

  const submitFunction = (evt) => {
    // evt.preventdefault();
    // document.getElementById("form-el").reset();
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    switch (loggedIn) {
      case false:
        setLoggedIn(true);
        break;
      case true:
        setLoggedIn(false);
        break;
    }
  }

  const handleFirstInput = (evt) => {
    setUserDetails({
      ...userDetails,
      firstName: evt.target.value,
    })
  }

  const handleLastInput = (evt) => {
    setUserDetails({
      ...userDetails,
      lastName: evt.target.value,
    })
  }


  return (
    <>
      <Header submitFunction={submitFunction} handleFirstInput={handleFirstInput} handleLastInput={handleLastInput} />
      {/* Not logged in --> Shows default page  . Logged in --> Shows different page with logged in features such as view profile */}
      {!loggedIn ?
        <section>
          Not Logged In
        </section>
        :
        <section>
          <h1>Logged In</h1>
          <br />
          <button onClick={submitFunction}>Log Out</button>
          <br />
          <button>View Profile</button>
          <p>{userDetails.firstName} {userDetails.lastName}</p>
        </section>}
      <div>
        <Contents value={loggedIn} userDetails={userDetails} />
      </div>
    </>
  )
}

function Header({ submitFunction, handleFirstInput, handleLastInput }) {
  return (
    <>
      <input type="text" id='firstName' name='firstName' placeholder='First Name' required onChange={handleFirstInput} />
      <br />
      <input type="text" id='lastName' name='lastName' placeholder='Last Name' required onChange={handleLastInput} />
      <br />
      <button onClick={submitFunction}>Submit</button>
    </>
  )
}

export default App
