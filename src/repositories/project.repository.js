import { db } from "../firebase";
import { collection, addDoc, getDocs  } from "firebase/firestore";

class ProjectRepository {
     async create(data) {
          addDoc(collection(db,"Projects"),{
            id: data.id,
            date: data.date,
            degree: data.degree,
            desc: data.desc,
            img: data.img,
            school: data.school
          });
      }
      
      async findAll() {
        const querySnapshot = await getDocs(collection(db, "Projects"));
        const projects = [];
        querySnapshot.forEach((doc) => {
          projects.push({
            id: doc.id,
            ...doc.data()
          });
        });
        return projects.sort((a, b) => a.id - b.id);
      }         
    }
const projectRepository = new ProjectRepository();

export default projectRepository;