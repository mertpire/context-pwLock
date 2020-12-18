import React, { createContext, useState, useEffect } from "react";

export const PasswordContext = createContext();

export const PasswordsProvider = (props) => {
  const [newPassword, setPassword] = useState("");

  useEffect(() => {
    randomPassword();
  }, []);

  //New Password
  
  const randomPassword = () => {
    let newPass = "";
    let pwChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-+_*|?)(][{}&%$^#£!><'";

    for (let i = 0; i < 13; i++) {
      newPass += pwChars.charAt(Math.random() * pwChars.length);
    }
    setPassword(newPass);
  };

  //Storage

  const getInfoFromStorage = () => {
    let account;

    if (localStorage.getItem("accounts") === null) {
      account = [];
    } else {
      account = JSON.parse(localStorage.getItem("accounts"));
    }

    return account;
  };
  const setInfoToStorage = (accounts) => {
    let account = getInfoFromStorage();

    account.push(accounts);

    localStorage.setItem("accounts", JSON.stringify(account));
  };

  return (
    <PasswordContext.Provider
      value={{
        random: randomPassword,
        password: newPassword,
        setInfoToStorage: setInfoToStorage,
        getInfoFromStorage: getInfoFromStorage,
      }}
    >
      {props.children}
    </PasswordContext.Provider>
  );
};
