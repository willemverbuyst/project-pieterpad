import mongoose from 'mongoose'

const stageSchema = new mongoose.Schema({
  stageNumber: {
    type: Number,
    unique: true,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  distanceInKm: {
    type: Number,
  },
  section: {
    enum: ['Prologue', 'Norths', 'South'],
  },
})

export const Stage = mongoose.model('Stage', stageSchema)
