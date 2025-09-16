import { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = (msg) => {
        this.setState({ messageMaman: msg, disabled: false });
    }
    reponseToto = (msg) => {
        this.setState({ messageToto: msg });
    }

    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button className={"my-5"}
                    onClick={() => this.ordreMaman("Va ranger ta chambre !")}
                >Order de la mère</button>

                <p>{this.state.messageMaman}</p>

                <hr className={"my-5"}/>
                
                <Toto 
                    name="Toto"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                />
            </div>
        )
    }
}

export default Maman;