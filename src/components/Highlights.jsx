import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Highlights = (data) => {
    return (
    <Jumbotron className="jumbo">
        <h1><i className="far fa-futbol"></i> Classement général</h1>
        <p className="presentation">
            Dans cette app, on retrouve le classement de votre ligue préférée en temps réél ainsi que les statistiques de votre équipe préférée.
            <br/>Il suffit de cliquer sur les différents boutons ci-dessous et le tour est joué ! J'ai utilisé qu'une seul API, je n'ai
            malheureusement pas eu le temps de trouver comment lier mon app à une autre api. Nom de l'api: football-data
        </p>
        <p>
            {data.children}
        </p>
    </Jumbotron>
    );
};

export default Highlights;