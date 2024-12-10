'use client';

import React, { useState } from 'react';
import { Admin, HelloProps } from '@/types/hello';

const Hello = ({ name, age }: HelloProps) => {
  return (
    <div>
      {name}이는 {age}살입니다.
    </div>
  );
};

export function Hello2({ name, age, role }: Admin) {
  return (
    <div>
      {name}이는 {age}살이고, {role}입니다.
    </div>
  );
}

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Hello;
