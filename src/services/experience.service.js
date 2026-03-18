    import experienceRepository from '../repositories/experience.repository.js';
    import { v1 as uuidv1} from 'uuid';

    class ExperienceService {
      async createExperience(data) {
        return experienceRepository.create({id: uuidv1(), name: data.name, description: data.description, github: data.github, linkedin: data.linkedin, resume: data.resume, roles: data.roles });
      }
    
      async getExperienceById(id) {
        return experienceRepository.findById(id);
      }
         
      async getAllExperience() {
        return experienceRepository.findAll();
      }
    
      async updateExperience(id, data) {
        return experienceRepository.update(id, data);
      }
    
      async deleteExperience(id) {
        return experienceRepository.delete(id);
      }
    }
    
    const experienceService = new ExperienceService();

    export default experienceService;