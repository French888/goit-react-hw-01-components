import Profile from "./components/Profile";
import profile from "./profile.json";

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
    </div>
  );
}

export default App;
