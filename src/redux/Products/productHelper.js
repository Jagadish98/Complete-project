import {firestore} from '../../firebase/utils'

export const handleFetchProducts = () => {
 return new Promise((resolve, reject) => {
      firestore
        .collection('product')
        .get()
        .then(snapshot => {
            const productsArray = snapshot.docs.map((doc) => {
                  return {
                        ...doc.data(),
                        documentID : doc.id
                  }
            });
            resolve(productsArray);
            console.log(productsArray);
        })
        .catch(err => {
            reject(err)
        })
 })    
}
