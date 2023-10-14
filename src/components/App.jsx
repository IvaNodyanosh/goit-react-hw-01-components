import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { Transactions } from "./Transactions/Transactions";

import user from "../Path/user";
import stats from "../Path/data";
import friends from "../Path/friends";
import transactions from '../Path/transactions'



export const App = () => {
  return <><Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
    stats={user.stats}
  />
    <Statistics title={'Upload stats'} stats={stats} />
    <FriendList friends={friends} />
    <Transactions items={transactions} />
    
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400;600;800&display=swap');
  </style>
  </>
};
