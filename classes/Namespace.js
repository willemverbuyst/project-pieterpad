class Namespace {
  constructor(id, title, icon, endpoint) {
    this.id = id
    this.title = title
    this.image = icon
    this.endpoint = endpoint
    this.rooms = []
  }

  addRoom(roomObject) {
    this.rooms.push(roomObject)
  }
}

module.exports = Namespace
