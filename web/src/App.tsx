import styles from './App.module.scss';
import { LoginBox } from './componentes/LoginBox';
import { MessageList } from './componentes/MessageList';
import { SendMessageForm } from './componentes/SendMessageForm';
import { useContext } from 'react';
import { AuthContext } from './contexts/auth';


export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.Signed : ''}`}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </main>
  )
}

