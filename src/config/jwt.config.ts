export default (): Record<string, unknown> => ({
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
  },
})
