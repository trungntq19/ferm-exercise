import { Players } from '../shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation';

function Main() {
    return (
        <PlayersPresentation players={Players} />
    );
}

export default Main;