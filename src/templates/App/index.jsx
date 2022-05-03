
import { Counter } from '../../components/Counter';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostProvider } from '../../contexts/PostsProvider';
import './styles.css';

function App() {

  return (
      <div>
         <CounterProvider>
          <Counter />
        </CounterProvider>
        <PostProvider>
            <div>
              <Posts />
            </div>
        </PostProvider>
      </div>
  );
}

export default App;
