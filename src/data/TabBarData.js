import CallListScreen from '../screens/CallListScreen';
import ChatListScreen from '../screens/ChatListScreen';
import StatusListScreen from '../screens/StatusListScreen';

export const TabBarData = [
  {
    id: 1,
    name: 'Chats',
    route: ChatListScreen,
  },
  {
    id: 2,
    name: 'Status',
    route: StatusListScreen,
  },
  {
    id: 3,
    name: 'Calls',
    route: CallListScreen,
  },
];
