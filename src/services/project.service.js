    import projectRepository from '../repositories/project.repository.js';
    import { v1 as uuidv1} from 'uuid';

    class ProjectService {
      async createProject(data) {
        return projectRepository.create({id: uuidv1(), name: data.name, description: data.description, github: data.github, linkedin: data.linkedin, resume: data.resume, roles: data.roles });
      }
    
      async getProjectById(id) {
        return projectRepository.findById(id);
      }
         
      async getAllProject() {
        return projectRepository.findAll();
      }
    
      async updateProject(id, data) {
        return projectRepository.update(id, data);
      }
    
      async deleteProject(id) {
        return projectRepository.delete(id);
      }
    }
    
    const projectService = new ProjectService();

    export default projectService;