import * as dotenv from 'dotenv'
import app from './app'

const port = process.env.PORT || 3000;
dotenv.config()

app.listen(port, () => {
  console.log(`Aplicação iniciado com sucesso em http://localhost:${port}`)
})