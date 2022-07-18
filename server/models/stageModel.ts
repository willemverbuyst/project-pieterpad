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
    description: 'can only be one of the enum values',
  },
})

export const Stage = mongoose.model('Stage', stageSchema)
