import { useState } from 'react';
import ReactDOM from "react-dom";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const data = [
    {
      "id": 1,
      "username": "user101",
      "password": "123456",
      "name": "Jacky"
    },
    {
      "id": 2,
      "username": "user102",
      "password": "123456",
      "name": "Jane"
    },
    {
      "id": 3,
      "username": "user103",
      "password": "123456",
      "name": "Tom"
    },
    {
      "id": 4,
      "username": "user104",
      "password": "123456",
      "name": "Helen"
    },
    {
      "id": 5,
      "username": "user105",
      "password": "123456",
      "name": "Mark"
    }
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    let payload = {
      username,
      password
      };
      const requestUrl = "http://localhost:8080/login";
      fetch(requestUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      })
      .then((resp) => {
      if (resp.ok) {
      //success message
      } else {
      //fail message
      console.log("Failed to get exchange rate");
      }
      })
      .catch((e) => console.log(e));
      };
    /*// Find user login info
    const userData = data.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.username });
    }
  };*/

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;