import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
    return <ul className={`${ css.friend__list } container`}>
        {friends.map(friend =>
        <li key={friend.id} className={css.friend__item}>
                <span className={clsx(css.friend__status, { [css.friend__online]: friend.isOnline, [css.friend__offline]:!friend.isOnline })} ></span>
            <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.friend__name}>{friend.name}</p>
        </li>)}
    </ul>
}