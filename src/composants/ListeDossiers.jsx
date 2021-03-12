import './ListeDossiers.scss';
import {instanceFirestore} from '../firebase'
import Dossier from './Dossier';
import { useEffect, useState } from 'react';

export default function ListeDossiers({util}) {
  let [dossiers, setDossiers] = useState([]);
  useEffect(
    () => {
      let dossTab = [];
      instanceFirestore.collection('utilisateurs').doc(util.uid).collection('dossiers').get().then(
        reponse => {
          reponse.forEach(
          doc => dossTab.push(doc.data()));
          setDossiers(dossTab);
        }
      );
    }, []
  )
  
  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}