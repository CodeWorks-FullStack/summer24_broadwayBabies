import { Schema } from "mongoose";



export const ShowSchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 50, default: "Toy Story" },
  animalId: { type: Schema.ObjectId, required: true, ref: 'Animal' },
  handlerId: { type: Schema.ObjectId, required: true, ref: 'Account' }
}, { toJSON: { virtuals: true } })


// Note virtuals of this kind MUST be populated when retrieved from the DB
ShowSchema.virtual('animal', {
  localField: 'animalId',
  ref: 'Animal',
  foreignField: '_id',
  justOne: true
})

ShowSchema.virtual('handler', {
  localField: 'handlerId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
