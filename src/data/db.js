import { openDB } from "idb";

const initDB = async ()=>{
    return openDB('feedback',1,{
        upgrade(db){
            if(!db.objectStoreNames.contains('feedback')){
                db.createObjectStore('feedback',{keyPath:'id' , autoIncrement:true})
            }
        }
    })
}

export const saveFeedbackOffline = async (feedback) =>{
    const db = await initDB();
    await db.add('feedback' , feedback);
}

export const getOfflineFeedback = async () => {
    const db = await initDB(); 
    return db.getAll('feedback'); 
  };

export const clearOfflineFeedback = async () =>{
    const db = await initDB();
    const tx = db.transaction('feedback', 'readwrite');
    await tx.store.clear();

}