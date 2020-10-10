import React, { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = createContext();
export const useContacts = () => useContext(ContactsContext);


export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  //这种直接就设定的也是常见pattern..
  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }
  //甚至治理 v setV也是非常常见的pv..
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
