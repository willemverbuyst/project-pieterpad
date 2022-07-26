const Namespace = require('../classes/Namespace')
const Room = require('../classes/Room')

const prologue = new Namespace(0, 'Prologue', 'P', '/prologue')
const north = new Namespace(1, 'North', 'P', '/north')
const south = new Namespace(2, 'South', 'P', '/south')

const namespaces = [prologue, north, south]

prologue.addRoom(new Room(0, 'Stage_1', 'Prologue'))

north.addRoom(new Room(0, 'Stage_2', 'North'))
north.addRoom(new Room(1, 'Stage_3', 'North'))
north.addRoom(new Room(2, 'Stage_4', 'North'))
north.addRoom(new Room(4, 'Stage_5', 'North'))

south.addRoom(new Room(0, 'Stage_15', 'South'))
south.addRoom(new Room(1, 'Stage_16', 'South'))
south.addRoom(new Room(2, 'Stage_17', 'South'))
south.addRoom(new Room(4, 'Stage_18', 'South'))

module.exports = namespaces
