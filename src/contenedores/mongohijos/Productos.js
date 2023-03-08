import MongoContainer from "../MongoContainer.js"
import * as model from "../models/productosModel.js"
import * as Logger from "../../Logger.js"

export default class productos extends MongoContainer{
  constructor(){
    super()
  }
  
  //GET
  async getAll(){
    try {
      await this.connect()

      let productos = await model.productos.find({},{__v:0})
      await this.disconnect()

      return productos
    } catch (error) {
      Logger.logError.error(error)
    }
  }

  async getById(prodId){
    try {
      await this.connect()
      let producto = await model.productos.findOne({_id:prodId},{__v:0})

      await this.disconnect()

      return producto
    } catch (error) {
      Logger.logError.error(error)
    }
  }

  async getByTags(tags){
    try {
      await this.connect()

      let allProductos = await model.productos.find({},{__v:0})
      const productos = []

      for (let i = 0; i < allProductos.length; i++) {
        if (allProductos[i].tags.includes()) {
          
        }
        
      }

      await this.disconnect()

      return productos
    } catch (error) {
      logger.logError.error(error)
    }
  }
  //POST
  async save(producto){
    try {
      await this.connect()

      const nuevo = await model.productos.create(producto)
      
      await this.disconnect()

      return nuevo
    } catch (error) {
      Logger.logError.error(error)
    }
  }

  async saveMany(array){
    try {
      await this.connect()

      await model.productos.insertMany(array)

      await this.disconnect()

    } catch (error) {
      Logger.logError.error(error)
    }
  }

  //PUT
  async put(prodId, producto){
    try {
      await this.connect()

      let res = await model.productos.updateOne({_id: prodId}, producto)

      await this.disconnect()

      return res
    } catch (error) {
      Logger.logError.error(error)
    }
  }

  //DELETE
  async deleteById(prodId){
    try {
      await this.connect()

      let res = await model.productos.findByIdAndDelete(prodId)

      await this.disconnect()

      return res
    } catch (error) {
      Logger.logError.error(error)
    }
  }

  async deleteAll(){
    try {
      await this.connect()

      let res = await model.productos.deleteMany()

      await this.disconnect()

      return res
    } catch (error) {
      Logger.logError.error(error)
    }
  }
}
