import ListTail from '@/components/list/ListTail';
import Hello, { Counter, Hello2 } from '@/components/Hello';

export default function Home() {
  return (
    <div>
      <ListTail />
      <Hello name='겨울' />
      <Hello2 name='코양' age={6} role='할퀴기 마스터' />
      <Counter />
    </div>
  );
}
