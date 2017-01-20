# ratp

NodeJS wrapper around RATP real-time API.

Documentation and inscription: https://data.ratp.fr/page/temps-reel/

## Installation

```
npm install ratp
```

## Usage

```javascript
import ratp from 'ratp'

const payload = {
  station: {
    line: {
      code: '13',
    },
    name: 'gabriel peri',
  },
}

ratp.getStations(payload).then(res => {

  console.log(res)

  // {
  //   stations: [
  //     {
  //       geoPointA: [Object],
  //       geoPointR: [Object],
  //       id: '1947-2202',
  //       line: [Object],
  //       name: 'Gabriel-Peri',
  //       stationArea: [Object]
  //     }
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
