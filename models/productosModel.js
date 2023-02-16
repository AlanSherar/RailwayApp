import mongoose from "mongoose"

const productosColl = 'productos'

const Schema = new mongoose.Schema({
    title: {type: String, required: true, max: 50},
    price: {type: Number, required: true},
    thumbnail: {type: String, max: 50}
})

export const productos = mongoose.model(productosColl, Schema)

