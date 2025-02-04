import { useEffect } from "react"

const ContactList = () => {
  
  useEffect(() => {
    const getContacts = async () => {
    const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
    const allContacts = await response.json();
    console.log(allContacts);
    
  };
  getContacts();
  });

  return( 
    <section>

      <h1>Contact List</h1>

        <ol>
          {
            allContacts.map(({ name, phone}) => {
              return <li key={phone}> {name}</li>
            })
          }
        </ol>
        
    </section>
  
  )
}

export default ContactList
