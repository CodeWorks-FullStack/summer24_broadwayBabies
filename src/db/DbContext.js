import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { AnimalSchema } from '../models/Animal.js';
import { ShowSchema } from '../models/Show.js';

class DbContext {
  Animals = mongoose.model('Animal', AnimalSchema)

  Shows = mongoose.model('Show', ShowSchema)

  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
