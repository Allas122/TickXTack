import mongoose from "mongoose"

export const Connection = mongoose.createConnection(global.config.MONGO_CONNECTION)
