import React from 'react';
import Bundesliga from '../img/Bundesliga.png';
import LaLiga from '../img/LaLiga.png';
import Ligue1 from '../img/Ligue1.png';
import PremierLeague from '../img/PremierLeague.png';
import SerieA from '../img/SerieA.png';
import Card from 'react-bootstrap/Card';

const Information = (data) => {
    let imgSrc, text, title;

    switch (data.leagueCaption) {

        case "Bundesliga":
            imgSrc = Bundesliga;
            text = "Le Championnat d'Allemagne de football est créé en 1903. Jusqu'en 1963, le statut des clubs est " +
                "amateur et le championnat national consiste en une phase finale entre les différents champions régionaux. " +
                "Le championnat professionnel à poule unique, la Bundesliga, est créé en 1963. Le Bayern Munich, vainqueur " +
                "en 2019-2020, détient le record du nombre de victoires, avec 30 titres.";
            title = "Championnat Allemand";
            break;

        case "Primera Division":
            imgSrc = LaLiga;
            text = "Le championnat d'Espagne de l'élite est la Primera División entre 1928 et 2008 puis Liga BBVA de 2008 " +
                "à 2016 et LaLiga Santander depuis 2016. Dans le langage courant, le terme de « Liga » est souvent utilisé " +
                "pour désigner la compétition, bien que liga signifie simplement « ligue » en espagnol. L'antichambre de cette " +
                "division est le championnat d'Espagne de football de deuxième division. Le Real Madrid a remporté le " +
                "Championnat d'Espagne 2019-2020.";
            title = "Championnat Espagnol";
            break;

        case "Ligue 1":
            imgSrc = Ligue1;
            text = "Le Championnat de France de football, appelé Ligue 1 (ou Ligue 1 Uber Eats pour des raisons de " +
                "sponsoring avec Uber Eats) est le championnat professionnel de football masculin de plus haut niveau " +
                "de la Fédération française de football (qui regroupe tous les clubs de France et de Monaco).";
            title = "Championnat Français";
            break;

        case "Premier League":
            imgSrc = PremierLeague;
            text = "Le championnat d'Angleterre de football est la plus importante compétition de football en Angleterre. " +
                "Lancée en 1888 par la The Football Association sous le nom de Football League, la compétition laisse place " +
                "en 1992 à la Premier League, transformée en Barclays Premier League de 2004 à 2016 avant de reprendre son " +
                "appellation précédente.";
            title = "Championnat Anglais";
            break;

        case "Serie A":
            imgSrc = SerieA;
            text = "Le Championnat d'Italie de football, dénommé Serie A, ou Serie A italienne " +
                "(car le championnat brésilien est aussi nommé Série A), ou encore Serie A TIM pour des raisons de sponsoring " +
                "avec TIM, est une compétition de football qui représente en Italie le sommet de la hiérarchie du football. " +
                "La seconde division italienne est la Serie B.";
            title = "Championnat Italien";
            break;

        default:
            text = "Le Championnat de France de football, appelé Ligue 1 (ou Ligue 1 Uber Eats pour des raisons de " +
                "sponsoring avec Uber Eats) est le championnat professionnel de football masculin de plus haut niveau " +
                "de la Fédération française de football (qui regroupe tous les clubs de France et de Monaco).";
            title = "Championnat Français";
            break;
    }

    return (
        <div className="information">
            <Card>
                <Card.Header>Information du championnat</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <img src={imgSrc} alt={title} />
                </Card.Body>
                <Card.Header>Classement</Card.Header>
            </Card>
        </div>
    );
};

export default Information;