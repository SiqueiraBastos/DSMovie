import { ReactComponent as Starfull } from 'assets/img/starfull.svg';
import { ReactComponent as Starhalf } from 'assets/img/starhalf.svg';
import { ReactComponent as Starempty } from 'assets/img/starempty.svg';
import './styles.css';

function MovieStars() {

    return (
        <div className="dsmovie-stars-container">      
            <Starfull />
            <Starfull />
            <Starfull />
            <Starhalf />
            <Starempty />
        </div>

    );
}

export default MovieStars;