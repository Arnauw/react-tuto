const Toto = props => {
  return (
    <div>
        <h2 className={"my-5"}>{props.name}</h2>
        <button
            // Compléter cette section
        >Réponse</button>

        <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto