import { useState, useEffect } from "react";
import "./styles.css"

import Form from "./Form/index.js";
import List from "./List/index.js";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Nazlı", phone: "123123" },
    { fullname: "dümbük", phone: "123123" },
    { fullname: "süksük", phone: "123123" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
