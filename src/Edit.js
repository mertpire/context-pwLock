import React, { useContext, useEffect, useState } from "react";
import { PasswordContext } from "./PasswordContext";
import { Link } from "react-router-dom";

const Edit = ({ match }) => {
  const { getInfoFromStorage } = useContext(PasswordContext);
  const [edit, setEdit] = useState({
    password: "",
    site: "",
    mail: "",
    note: "",
  });
  let infos = getInfoFromStorage();
  
  

  useEffect(() => {
    
      infos.forEach((account) => {
        if (account.site === match.params.id) {
          setEdit(account);
        }
      });
   
    
  }, [match.params.id,infos]);

 
  const onChangeHandler = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const saveInfoToStorage = (e) => {
    e.preventDefault();
    infos.forEach((account) => {
      if (account.site === match.params.id) {
        account.site = edit.site;
        account.password = edit.password;
        account.mail = edit.mail;
        account.note = edit.note;

        localStorage.accounts = JSON.stringify(infos);
      }
    });
  };

  const deleteAccount = (e) => {
    infos.forEach((account) => {
      if (account.site === match.params.id) {
        infos.splice(account, 1);
        localStorage.accounts = JSON.stringify(infos);
        
      }
    });

    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="password"
          type="text"
          value={edit.password}
          onChange={onChangeHandler}
        />
        <input
          name="site"
          type="text"
          value={edit.site}
          onChange={onChangeHandler}
        />
        <input
          name="mail"
          type="text"
          value={edit.mail}
          onChange={onChangeHandler}
        />
        <input
          name="note"
          type="text"
          value={edit.note}
          onChange={onChangeHandler}
        />

        <button onClick={saveInfoToStorage}>
          <Link to="/">Save</Link>
        </button>

        <button onClick={deleteAccount}>
          <Link to="/">Delete</Link>
        </button>
      </form>
    </div>
  );
};

export default Edit;
