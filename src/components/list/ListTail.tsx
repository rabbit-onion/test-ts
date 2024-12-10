import React from 'react';

interface Item {
  id: number;
  title: string;
}

const mockData: Item[] = [
  { id: 1, title: 'news1' },
  { id: 2, title: 'news2' },
  { id: 3, title: 'news3' },
];

const ListTail = () => {
  return (
    <div>
      <ul>
        {mockData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListTail;
