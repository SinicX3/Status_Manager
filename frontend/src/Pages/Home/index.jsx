import launch from "../../launch"

function Home () {

  return(<main>
      <h2>Suivez votre groupe d'un coup d'oeil</h2>
      <form id="create">
        <input type="text" name="nameField" id="nameField"></input>
      </form>
      <button type="submit" onClick={() => (launch(nameField.value))}>Créer une session</button>
      <p>OU</p>
      <button type="submit" onClick={() => (console.log(sessionId.value))}>Rejoindre la session</button>
      <form id="join">
        <input type="text" name="sessionId" id="sessionId"></input>
      </form>
    </main>
  )
}

export default Home 
