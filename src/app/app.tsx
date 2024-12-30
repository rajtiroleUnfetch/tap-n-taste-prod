import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className={styles.app}>
      <NxWelcome title="tap-n-taste" />
    </div>
  );
}

export default App;
