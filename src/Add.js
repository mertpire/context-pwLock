import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PasswordContext } from "./PasswordContext";

function Add() {
  const { password } = useContext(PasswordContext);
  const { random } = useContext(PasswordContext);
  const { setInfoToStorage } = useContext(PasswordContext);
  const [account, setAccount] = useState({});

  const [pw, setPw] = useState({});

  useEffect(() => {
    setPw(password);
  }, [password]);

  const newAccount = (e) => {
    let value = e.target.value;

    setAccount({ ...account, [e.target.name]: value, password: pw });
  };

  const onChangeHandler = (e) => {
    setPw(e.target.value);
  };
  console.log(pw);

  return (
    <div className="add">
      <div className="add-item">
        <form>
          <input
          className="password-btn"
            name="password"
            type="text"
            value={pw}
            onClick={random}
            onChange={onChangeHandler}
          /> <br/>
          <input
          className="site"
            name="site"
            type="text"
            placeholder="App/Site"
            onChange={newAccount}
          /> <br/>
          <input
          className="email"
            name="mail"
            type="email"
            placeholder="E-mail/Username"
            onChange={newAccount}
          /> <br/>
          <textarea
            className="notes"
            name="note"
            type="text"
            placeholder="Notes"
            onChange={newAccount}
          /> <br/>

          <button
            onClick={(e) => setInfoToStorage(account, e.preventDefault())}
          >
            <Link to="/">Add</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
