import MongoContainer from "../MongoContainer.js"
import * as model from "../models/usuariosModel.js"
import * as logger from "../../Logger.js"

export default class Usuarios extends MongoContainer{
  constructor(){
    super()
  }
  
  //GET
  async getAll(){
    try {
      await this.connect()

      let res = await model.usuarios.find({},{__v:0})
      await this.disconnect()

      return res
    } catch (error) {
      logger.logError.error(error)
    }
  }

  async getById(id){
    try {
      await this.connect()

      let res = await model.usuarios.find({_id:id},{__v:0})

      await this.disconnect()

      return res
    } catch (error) {
      logger.logError.error(error)
    }
  }

  async getByEmail(email){
    try {
      await this.connect()

      let res = await model.usuarios.findOne({email: email},{__v:0})

      await this.disconnect()
      return res
    } catch (error) {
      logger.logError.error(error)
    }
  }

  //POST
  async save(obj){
    try {
      await this.connect()

      const nuevo = await model.usuarios.create(obj)
      
      await this.disconnect()

      return nuevo
    } catch (error) {
      logger.logError.error(error)
    }
  }

  //PUT
  async put(id, obj){
    try {
      await this.connect()

      let res = await model.usuarios.updateOne({_id: id}, obj)

      await this.disconnect()

      return res
    } catch (error) {
      logger.logError.error(error)
    }
  }

  //DELETE
  async deleteById(id){
    try {
      await this.connect()

      let res = await model.usuarios.deleteOne({_id: id})

      await this.disconnect()

      return res
    } catch (error) {
      logger.logError.error(error)
    }
  }
}
