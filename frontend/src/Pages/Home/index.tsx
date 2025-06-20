import { useState } from "react"
import Session from "../Session"

function Home() {
  const [userName, setUserName] = useState("")
  const [showLaunch, setShowLaunch] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nameField = document.getElementById("nameField") as HTMLInputElement
    if (nameField.value.trim() !== "") {
      setUserName(nameField.value.trim())
      setShowLaunch(true)
    }
  }

  if (showLaunch) {
    return <Session userName={userName} />
  }

  return (
    <main>
      <h2>Suivez votre groupe d'un coup d'oeil</h2>
      <form id="create" onSubmit={handleSubmit}>
        <input type="text" name="nameField" id="nameField" />
        <button type="submit">Créer une session</button>
      </form>

      <p>OU</p>

      <form
        id="join"
        onSubmit={(e) => {
          e.preventDefault()
          const sessionId = document.getElementById("sessionId") as HTMLInputElement
          console.log(sessionId.value)
        }}
      >
        <input type="text" name="sessionId" id="sessionId" />
        <button type="submit">Rejoindre la session</button>
      </form>
    </main>
  )
}

export default Home
