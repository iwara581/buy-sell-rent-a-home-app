import fastify from 'fastify'

const app = fastify({ logger: true })

app.listen(5000, (err, addr) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  } else {
    console.log(`Server runing on port ${addr}`)
  }
})
