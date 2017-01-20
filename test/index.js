import expect from 'expect'

import ratp, { getClient } from '../src/ratp'

describe('ratp', () => {

  it('should export Ratp class', () => {
    expect(ratp).toExist()
  })

  it('should create a client', async () => {
    const client = await getClient()
    expect(client).toExist()
  })

  it('should get a station', async () => {

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
