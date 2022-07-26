class Namespace {
  constructor(id, title, image, endpoint) {
    this.id = id
    this.title = title
    this.image = image
    this.endpoint = endpoint
    this.rooms = []
  }

  addRoom(roomObject) {
    this.rooms.push(roomObject)
  }
}

module.exports = Namespace
