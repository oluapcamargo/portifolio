    import bioRepository from '../repositories/bio.repository.js';
    import { v1 as uuidv1} from 'uuid';

    class BioService {
      async createBio(data) {
        return bioRepository.create({id: uuidv1(), name: data.name, description: data.description, github: data.github, linkedin: data.linkedin, resume: data.resume, roles: data.roles });
      }
    
      async getBioById(id) {
        return bioRepository.findById(id);
      }
         
      async getAllBio() {
        return bioRepository.findAll();
      }
    
      async updateBio(id, data) {
        return bioRepository.update(id, data);
      }
    
      async deleteBio(id) {
        return bioRepository.delete(id);
      }
    }
    
    const bioService = new BioService();

    export default bioService;