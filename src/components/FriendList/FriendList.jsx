import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => {
        return (
          <li className={css.friendsItem} key={friend.id}>
            <FriendListItem {...friends} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
