import {
    getFirestore,
    collection,
    addDoc
} from "firebase/firestore";
import app from './firebase';

const database = getFirestore(app);

const save = async (tableName, _data) => {

    try {

        const data = { ..._data };
        // nomeTabela
        // registro
        // database

        const docRef = await addDoc(collection(database, tableName), data);
        console.log("Document written with ID: ", docRef.id);

        const savedData = {
            id: docRef.id,
            ...data,
        }

        return savedData;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const crud = {
    save
};

export default crud;