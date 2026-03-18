    import skillsRepository from '../repositories/skills.repository';
    import { v1 as uuidv1} from 'uuid';

    class SkillsService {
      async createSkill(data) {
        return skillsRepository.create({id: uuidv1(), name: data.name, description: data.description, github: data.github, linkedin: data.linkedin, resume: data.resume, roles: data.roles });
      }
    
      async getSkillById(id) {
        return skillsRepository.findById(id);
      }
         
      async getAllSkills() {
        let data =  await skillsRepository.findAll();
        const map = {};

        data.forEach(skill => {

            if (!map[skill.type]) {
            map[skill.type] = {
                id: Object.keys(map).length,
                title: skill.type,
                skills: []
            }
            }

            map[skill.type].skills.push({
            id: skill.id,
            name: skill.name,
            image: skill.image
            })
        })
        return map;
      }
    
      async updateSkill(id, data) {
        return skillsRepository.update(id, data);
      }
    
      async deleteSkill(id) {
        return skillsRepository.delete(id);
      }
    }
    


    const skillService = new SkillsService();

    export default skillService;