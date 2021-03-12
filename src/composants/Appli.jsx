import './Appli.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import {instanceFirestore} from '../firebase';

export default function Appli() {

  const [util,setUtil] = useState(null);

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(
        util => {setUtil(util)
          //Créer le profile de l'utilisateur sdans FireStore si utilisateur n'est pas NULL
          if(util){
            instanceFirestore.collection('utilisateurs').doc(util.uid).set({
              nom: util.displayName,
              courriel: util.email,
              datecompte: firebase.firestore.FieldValue.serverTimestamp()
            }, {merge:true});
          }
        }
      )
    }, []
  );

  return (
    <div className="Appli">
        {
          util ?
          <>
          <Entete util={util}/>
          <section className="contenu-principal">
            <ListeDossiers util={util}/>
            <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
              <AddIcon />
            </Fab>
          </section>
          </>
          : 
          <Accueil />
        }
    </div>
    );
}
