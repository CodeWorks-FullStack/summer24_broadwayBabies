import { animalsService } from "../services/AnimalsService.js";
import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";



export class AnimalsController extends BaseController {
  constructor() {
    super('api/animals')
    this.router
      .post('', this.createAnimal)
      .get('', this.getAnimals)
      .put('/:animalId', this.updateAnimal)
      .get('/:animalId/shows', this.getAnimalShows)
  }
  async getAnimals(request, response, next) {
    try {
      const animals = await animalsService.getAnimals()
      response.send(animals)
    } catch (error) {
      next(error)
    }
  }
  async createAnimal(request, response, next) {
    try {
      const animalData = request.body
      const animal = await animalsService.createAnimal(animalData)
      response.send(animal)
    } catch (error) {
      next(error)
    }
  }

  async updateAnimal(request, response, next) {
    try {
      const animalId = request.params.animalId
      const animalUpdate = request.body
      const animal = await animalsService.updateAnimal(animalId, animalUpdate)
      response.send(animal)
    } catch (error) {
      next(error)
    }
  }

  async getAnimalShows(request, response, next) {
    try {
      const animalId = request.params.animalId
      const shows = await showsService.getAnimalShows(animalId)
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }
}
