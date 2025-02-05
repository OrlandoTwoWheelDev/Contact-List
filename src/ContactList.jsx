import { useEffect, useState } from "react"

const ContactList = (props) => {
  const [ContactList, setContactList] = useState([]);
  const pickedContact = {ContactList}

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
      const allContacts = await response.json();
      console.log(allContacts);

    };
    getContacts();
  }, []);
  

  return (
    <section>

      <ul>
        {
          pickedContact.map(({ name, phone }) => {
            return (
              <li key={phone} onClick={() => {allContacts}}> {name}</li>
            )
          })
        }
      </ul>

    </section>

  )
}

export default ContactList
