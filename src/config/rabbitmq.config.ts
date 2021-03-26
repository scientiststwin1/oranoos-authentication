export default (): Record<string, unknown> => ({
    rabbitmq: {
      host: process.env.RABBITMQ_HOST || 'railive_rabbitmq_1',
      port: process.env.RABBITMQ_PORT || 5672,
    },
  })
  