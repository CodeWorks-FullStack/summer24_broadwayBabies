import { Schema } from "mongoose";



export const AnimalSchema = new Schema({
  name: { type: String, minLength: 1, maxLength: 100, required: true, default: 'Slinky' },
  emoji: { type: String, minLength: 1, maxLength: 25, required: true, default: '🐕' },
  talent: { type: String, minLength: 1, maxLength: 100, required: true, default: 'Stretches like a slinky, and can be used like a grappling hook.' }
}, { timestamps: true, toJSON: { virtuals: true } })
