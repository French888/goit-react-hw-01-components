import Profile from "./components/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import friends from "./components/FriendList/friends.json";
import profile from "./profile.json";
import transactions from "./components/TransactionHistory/transactions.json";
function App() {
  return (
    <div className="App">
      <Profile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />;
    </div>
  );
}

export default App;
