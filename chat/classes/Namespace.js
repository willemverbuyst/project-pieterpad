class Namespace {
  constructor(id, title, icon, endpoint) {
    this.id = id
    this.title = title
    this.icon = icon
    this.endpoint = endpoint
    this.rooms = []
  }

  addRoom(roomObject) {
    this.rooms.push(roomObject)
  }
}

module.exports = Namespace
