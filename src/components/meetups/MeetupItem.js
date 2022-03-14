 import meetupClasses from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavoriteHandler(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

    return <li className={meetupClasses.item}>
        <Card>
            <div className={meetupClasses.image}>
                <img src={ props.image } alt={ props.title } />
            </div>
            <div className={meetupClasses.content}>
                <h3>{ props.title }</h3>
                <address>{ props.address }</address>
                <p>{ props.description }</p>
            </div>
            <div className={meetupClasses.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;