import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LaboratoriesController {
  public async index({ request, response }: HttpContextContract) {
    return response.ok({})
  }

  public async store({ request, response }: HttpContextContract) {
    return response.ok({})
  }

  public async show({ request, response }: HttpContextContract) {
    return response.ok({})
  }

  public async update({ request, response }: HttpContextContract) {
    return response.ok({})
  }

  public async destroy({ request, response }: HttpContextContract) {
    return response.ok({})
  }

  public async scheduleLaboratory({ request, response }: HttpContextContract) {
    return response.ok({})
  }
}
