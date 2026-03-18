import { db } from "../firebase";
import { collection, addDoc, getDocs  } from "firebase/firestore";

class BioRepository {
     async create(data) {
          addDoc(collection(db,"Bio"),{
            name: data.name,
            description: data.description,
            github: data.github,
            linkedin: data.linkedin,
            resume: data.resume,
            roles: data.roles
          });
      }
      
      async findAll() {
        const querySnapshot = await getDocs(collection(db, "Bio"));
        const bios = [];
        querySnapshot.forEach((doc) => {
          bios.push({
            id: doc.id,
            ...doc.data()
          });
        });
        return bios;
      }         
    }
const bioRepository = new BioRepository();

export default bioRepository;