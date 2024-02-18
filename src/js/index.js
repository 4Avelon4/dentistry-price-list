// eslint-disable-next-line import/no-unresolved
import '@/style/style.scss';
import { db } from './db';
import Accordion from './Accordion';

const serverData = db;
const $tree = document.getElementById('tree');

function createdTree(data, parentId, level) {
  const $ul = document.createElement('ul');
  $ul.classList.add('tree__list');

  data
    .filter((item) => item.head === parentId)
    .sort((a, b) => a.sorthead - b.sorthead)
    .forEach((item) => {
      const $li = document.createElement('li');
      $li.classList.add('tree__item');

      const childUl = createdTree(data, item.id, level + 1);

      if (childUl.childElementCount > 0) {
        const $details = document.createElement('details');
        const $summary = document.createElement('summary');

        $summary.classList.add('item__prev');
        $details.classList.add('item__descr');

        $details.open = true;
        $summary.textContent = `${item.name}`;

        $li.append($details);
        $details.append($summary);
        $details.appendChild(childUl);
        new Accordion($details);
      } else {
        $li.textContent = `${item.name} - ${item.price.toLocaleString('ru-RU')} ₽`;
      }

      $ul.appendChild($li);
    });

  return $ul;
}

const tree = createdTree(serverData.services, null, 0);
$tree.appendChild(tree);
