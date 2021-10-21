import PropTypes from "prop-types";
import style from "./friendList.module.css";

export function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <li key={id} className={style.item}>
            {isOnline === false ? (
              <span className={style.statusOf}>{isOnline}</span>
            ) : (
              <span className={style.statusOn}>{isOnline}</span>
            )}
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ),
};
