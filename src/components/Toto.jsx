const Toto = props => {

  return (
    <div>
        <h2 className={"my-5"}>{props.name}</h2>
        <button
            onClick={() => props.reponseTotoProps("Non tue pue !")}
            disabled={props.leState.disabled}
        >Réponse</button>

        <p className={"my-5"}>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto