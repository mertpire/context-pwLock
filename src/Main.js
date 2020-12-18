import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PasswordContext } from "./PasswordContext";

import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillCopy,
  AiTwotoneEdit,
  AiOutlinePlus,
} from "react-icons/ai";

function Main() {
  const { password } = useContext(PasswordContext);
  const { random } = useContext(PasswordContext);
  const { editPage } = useContext(PasswordContext);
  const { getInfoFromStorage } = useContext(PasswordContext);

  let accounts = getInfoFromStorage();
  let counter = 0;


  

  const showPassword = (e) => {
    let site = e.target.parentElement.parentElement.parentElement.previousElementSibling.children[0];
    console.log(site);
    e.preventDefault();
    accounts.forEach((account) => {
      if (account.site === site.textContent) {
        if (counter % 2 === 0) {
          site.nextElementSibling.textContent = account.password;
          counter++;
        } else {
          site.nextElementSibling.textContent = "*************";
          counter++;
        }
      }
    });
  };
  const copyPassword = (e) => {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", password);
    document.body.appendChild(inputElement);

    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);
  };

  return (
    <div className="main">
      <div className="main-item">
        <div className="accounts">
          <div className="btns">
            <div className="password-btn">
              <button onClick={random}>{password}</button>
            </div>
            <div className="add-btn">
              <Link to="/addNewSite">
                <icon className="add-btn-item">
                  <AiOutlinePlus />
                </icon>
              </Link>
            </div>
          </div>

          {accounts.map((account) => (
            <div className="accounts-item" key={account.password}>
              <div className="accounts-content">
                <h1>{account.site}</h1>
                <p>*************</p>
              </div>
              <div className="accounts-btns">
                <icon className="show-btn" onClick={showPassword}>
                  <AiFillEye />
                </icon>
                <icon className="copy-btn" onClick={copyPassword}>
                  <AiFillCopy />
                </icon>
                
                <Link to={`/editPage/${account.site}`}>  
                <icon className="edit-btn" onClick={editPage}>
                  <AiTwotoneEdit />
                </icon> 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
