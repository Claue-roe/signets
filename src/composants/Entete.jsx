import './Entete.scss';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core'; 
import firebase from 'firebase/app';

export default function Entete({util}) {
  return (
    <header className="Entete">
      <div className="logo">
        Signets
        <Button
        variant="outlined"
        size="small"
        className="btn-deconnexion"
        onClick={() => firebase.auth().signOut()}>
        Déconnexion
        </Button>
      </div>
      <div className="utilisateur">{util.displayName} <Avatar className="avatar" alt={util.displayName} src={util.photoURL} /></div>
    </header>
  );
}