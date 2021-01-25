import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionView';

export class UserList extends CollectionView<User, UserProps> {
  renderItem = (model: User, itemParent: Element): void => {
    const template = `
      <div>
        <h2>User ID #${model.get('id')}</h2>
        <p>User Name: ${model.get('name')}</p>
        <p>User Age: ${model.get('age')}</p>
      </div>
    `;

    const item = document.createElement('div');
    item.innerHTML = template;
    this.parent.appendChild(item);
  };
}
