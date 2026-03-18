import { db } from "../firebase";
import { collection, addDoc, getDocs  } from "firebase/firestore";

class SkillsRepository {
     async create(data) {
          addDoc(collection(db,"Skills"),{
            id: data.id,
            image: data.image,
            name: data.name,
            type: data.type
          });
      }
      
      async findAll() {
        const querySnapshot = await getDocs(collection(db, "Skills"));
        const skills = [];
        querySnapshot.forEach((doc) => {
          skills.push({
            id: doc.id,
            ...doc.data()
          });
        });
        return skills;
      }         
    }
const skillsRepository = new SkillsRepository();

export default skillsRepository;