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

const wrapper = {}

methods.forEach(method => {
  wrapper[method] = payload => getClient().then(client => new Promise((resolve, reject) => {
    client[method](payload, (err, res) => {
      if (err) { return reject(err) }
      resolve(res['return']) // eslint-disable-line dot-notation
    })
  }))
})

export function getClient () {
  return new Promise((resolve, reject) => {
    soap.createClient(WSIV, (err, client) => {
      if (err) { return reject(err) }
      resolve(client)
    })
  })
}

export default wrapper
