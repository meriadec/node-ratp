import soap from 'soap'
import path from 'path'

const WSIV = path.resolve(__dirname, '../wsiv.wsdl')

export const methods = [
  'getLines',
  'getDirections',
  'getStations',
  'getStationsAreas',
  'getMissionsNext',
  'getMissionsFirstLast',
  'getMissionsFrequency',
  'getMission',
]

class Ratp {

  constructor () {

    this._client = null

    methods.forEach(method => {
      this[method] = payload =>
        this.getClient().then(client =>
          new Promise((resolve, reject) => {
            client[method](payload, (err, res) => {
              if (err) { return reject(err) }
              resolve(res['return']) // eslint-disable-line dot-notation
            })
          }))
    })

  }

  getClient () {
    return new Promise((resolve, reject) => {
      if (this._client) {
        return resolve(this._client)
      }
      soap.createClient(WSIV, (err, client) => {
        if (err) { return reject(err) }
        this._client = client
        resolve(this._client)
      })
    })
  }

}

export default Ratp
