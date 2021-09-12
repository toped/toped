const { gql } = require('apollo-server-express')

const Room = gql`

  # TYPES 
  type GameRoom {
    id: ID
    host: String
    slug: String
    settings: GameSettings
    #readonly
  }

  type GameUser {
    displayName: String
    status: String
    uid: String
  }

  type GameSettings {
    rounds: Int
    maxPlayers: Int
    timeLimit: Int
  }

  # INPUTS
  input GameRoomInput {
    host: String
    settings: GameSettingsInput
  }

  input GameSettingsInput {
    rounds: Int
    maxPlayers: Int
    timeLimit: Int
  }

  extend type Query {
    rooms(id: ID, host: String, slug: String): [GameRoom]
  }

  extend type Mutation {
    createRoom(room: GameRoomInput): GameRoom
    updateRoom(room: GameRoomInput, clearRoundTimer: Boolean): GameRoom
    deleteRoom(host: String): String
  }
`

module.exports = Room