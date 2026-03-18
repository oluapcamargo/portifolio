    import educationRepository from '../repositories/education.repository.js';
    import { v1 as uuidv1} from 'uuid';

    class EducationService {
      async createEducation(data) {
        return educationRepository.create({id: uuidv1(), name: data.name, description: data.description, github: data.github, linkedin: data.linkedin, resume: data.resume, roles: data.roles });
      }
    
      async getEducationBioById(id) {
        return educationRepository.findById(id);
      }
         
      async getAllEducation() {
        return educationRepository.findAll();
      }
    
      async updateEducation(id, data) {
        return educationRepository.update(id, data);
      }
    
      async deleteEducation(id) {
        return educationRepository.delete(id);
      }
    }
    
    const educationService = new EducationService();

    export default educationService;