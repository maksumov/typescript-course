import { User } from './models/User';
import { UserList } from './views/UserList';

const root = document.getElementById('root');
const users = User.buildUserCollection();
if (root) {
  const userList = new UserList(root, users);
  users.on('change', () => {
    userList.render();
  });
  users.fetch();
} else {
  throw new Error('No root element found');
}
