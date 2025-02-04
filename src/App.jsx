import { useEffect, useState } from "react"
import ContactList from "./ContactList"

function App() {
  const [selectContact, setSelectContact] = useState("")

  return (
    <>
      
      <h1>My Favorite Contacts</h1>
      <ContactList {...useEffect}/>

    </>
  )
}

export default App
