import { db } from "../firebase";
import { collection, addDoc, getDocs  } from "firebase/firestore";

class ExperienceRepository {
     async create(data) {
          addDoc(collection(db,"Experience"),{
            id: data.id,
            date: data.date,
            degree: data.degree,
            desc: data.desc,
            img: data.img,
            school: data.school,
            objdescription: data.objdescription
          });
      }
      
      async findAll() {
        const querySnapshot = await getDocs(collection(db, "Experience"));
        const experience = [];
        querySnapshot.forEach((doc) => {
          experience.push({
            id: doc.id,
            ...doc.data()
          });
        });
        return experience.sort((a, b) => a.id - b.id);
      }         
    }
const experienceRepository = new ExperienceRepository();

export default experienceRepository;