import { dbContext } from "../db/DbContext.js"



class ShowsService {
  async getAccountShows(userId) {
    const shows = await dbContext.Shows.find({ handlerId: userId }).populate('animal')
    return shows
  }
  async getAnimalShows(animalId) {
    // -------------------------------- .find({animalId: '6615c244650db689bde4f58e'})
    const shows = await dbContext.Shows.find({ animalId: animalId }).populate('animal handler', '-email')
    return shows
  }

  async getShows() {
    const shows = await dbContext.Shows.find().populate('animal handler', '-email')
    // const shows = await dbContext.Shows.find().populate('animal').populate('handler', '-email')
    return shows
  }
  async createShow(showData) {
    const show = await dbContext.Shows.create(showData)
    await show.populate('animal handler', '-email')
    return show
  }
}

export const showsService = new ShowsService()
