import { db } from "../firebase";
import { collection, addDoc, getDocs  } from "firebase/firestore";

class EducationRepository {
     async create(data) {
          addDoc(collection(db,"Education"),{
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
        const querySnapshot = await getDocs(collection(db, "Education"));
        const education = [];
        querySnapshot.forEach((doc) => {
          education.push({
            id: doc.id,
            ...doc.data()
          });
        });
        return education.sort((a, b) => a.id - b.id);
      }         
    }
const educationRepository = new EducationRepository();

export default educationRepository;