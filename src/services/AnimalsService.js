import { dbContext } from "../db/DbContext.js"



class AnimalsService {
  async getAnimals() {
    const animals = await dbContext.Animals.find()
    return animals
  }
  async createAnimal(animalData) {
    const animal = await dbContext.Animals.create(animalData)
    return animal
  }
  async updateAnimal(animalId, animalUpdate) {
    const originalAnimal = await dbContext.Animals.findById(animalId)
    if (!originalAnimal) throw new Error(`could not update, no animal at id: ${animalId}`)

    // const animal = await dbContext.Animals.findByIdAndUpdate(animalId, animalUpdate, { new: true, runValidators: true })
    // originalAnimal.name = animalUpdate.name
    originalAnimal.talent = animalUpdate.talent || originalAnimal.talent
    originalAnimal.emoji = animalUpdate.emoji == undefined ? originalAnimal.emoji : animalUpdate.emoji

    await originalAnimal.save()
    return originalAnimal

  }

}

export const animalsService = new AnimalsService()
