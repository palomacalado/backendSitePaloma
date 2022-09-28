import authConfig from "dotenv/config"

export default authConfig = {
    secret: process.env.APP_SECRET,
    expiresIn:"7d"
}