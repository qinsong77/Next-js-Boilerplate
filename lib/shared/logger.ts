import pino from 'pino'

const logger = pino({
  level: process.env.PINO_LOG_LEVEL || 'trace',
  serializers: {
    req: pino.stdSerializers.req, // Standard request serializer
    res: pino.stdSerializers.res, // Standard response serializer
  },
  browser: { asObject: true },
})

export default logger
