import expect from 'expect'

import Ratp from '../src/ratp'

describe('Ratp class', () => {

  it('should export Ratp class', () => {
    expect(Ratp).toExist()
  })

  it('should create a client', async () => {
    const ratp = new Ratp()
    const client = await ratp.getClient()
    expect(client).toExist()
  })

  it('should get a station', async () => {

    const ratp = new Ratp()

    const payload = {
      station: {
        line: {
          code: '13',
        },
        name: 'gabriel peri',
      },
    }

    const res = await ratp.getStations(payload)

    expect(res.stations).toBeA(Array)
    expect(res.stations.length).toBe(1)
    expect(res.stations[0].name).toBe('Gabriel-Peri')

  })

})
