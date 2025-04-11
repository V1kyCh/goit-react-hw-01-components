import './App.css';
// import user from './user.json';
// import { Profile } from './Profile/Profile';

// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import transactions from './transactions.json';

import { Statistics } from './Statistics/Statistics';
import data from './data.json'

import { FriendList } from './FriendList/FriendList';
import friends from './friends.json'

function App() {
  return (
    <div className="App">
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />      
      <TransactionHistory items={transactions}/> */}
      <div className='background'>
        <Statistics title="Upload stats" status={data} />
      </div>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
