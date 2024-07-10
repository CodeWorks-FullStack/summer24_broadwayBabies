import { Auth0Provider } from "@bcwdev/auth0provider";
import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";


export class ShowsController extends BaseController {
  constructor() {
    super('api/shows')
    this.router
      .get('', this.getShows)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createShow)
  }

  async getShows(request, response, next) {
    try {
      const shows = await showsService.getShows()
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }

  async createShow(request, response, next) {
    try {
      const showData = request.body
      const user = request.userInfo
      showData.handlerId = user.id
      const show = await showsService.createShow(showData)
      response.send(show)
    } catch (error) {
      next(error)
    }
  }
}
