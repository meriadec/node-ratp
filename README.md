# ratp

NodeJS wrapper around RATP real-time API.

Documentation and inscription: https://data.ratp.fr/page/temps-reel/

## Installation

```
npm install ratp
```

## Usage

```javascript
import Ratp from 'ratp'

const ratp = new Ratp()

const payload = {
  station: {
    name: 'chatelet',
  },
}

ratp
  .getStations({
    station: {
      name: 'chatelet',
    },
  })
  .then(res => {

    console.log(res)

    // {
    //   stations: [
    //     {
    //       geoPointA: [Object],
    //       geoPointR: [Object],
    //       id: '2036-2155',
    //       line: [Object],
    //       name: 'Chatelet',
    //       stationArea: [Object]
    //     },
    //     {
    //       geoPointA: [Object],
    //       geoPointR: [Object],
    //       id: '1964-2219',
    //       line: [Object],
    //       name: 'Chatelet',
    //       stationArea: [Object]
    //     },
    //     ...etc.
    //   ]
    // }

  })
```

## Methods

- **getLines**
- **getDirections**
- **getStations**
- **getStationAreas**
- **getMissionsNext**
- **getMissionsFirstLast**
- **getMissionsFrequency**
- **getMission**
