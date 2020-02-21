import React, { Component } from 'react'

import EPGBoard from 'my-library'

const channels = [
  {
    id: 1,
    name: 'Speed X 1'
  }, {
    id: 2,
    name: 'Sony 1'
  }, {
    id: 3,
    name: 'Marvel 1'
  }, {
    id: 11,
    name: 'Speed X 2'
  }, {
    id: 12,
    name: 'Sony 2'
  }, {
    id: 13,
    name: 'Marvel 2'
  }
]

const channelPrograms = [
  {
    channelId: 1,
    programs: [
      {
        name: 'program 1',
        startTime:1582181100000,
        endTime: 1582182000000,
      }, {
        name: 'program 2',
        startTime:1582182000000,
        endTime: 1582185600000,
      // }, {
      //   name: 'program 3',
      //   startTime:1582185600000,
      //   endTime: 1582192800000,
      }, {
        name: 'program 4',
        startTime:1582192800000,
        endTime: 1582194600000,
      }, {
        name: 'program 5',
        startTime:1582194600000,
        endTime: 1582198200000,
      }, {
        name: 'program 6',
        startTime:1582198200000,
        endTime: 1582200000000,
      }
    ]
  }, {
    channelId: 2,
    programs: [
      {
        name: 'program 1',
        startTime:1582178000000,
        endTime: 1582178400000,
      }, {
        name: 'program 2',
        startTime:1582178400000,
        endTime: 1582185600000,
      }, {
        name: 'program 3',
        startTime:1582185600000,
        endTime: 1582187400000,
      }, {
        name: 'program 4',
        startTime:1582187400000,
        endTime: 1582189200000,
      }, {
        name: 'program 5',
        startTime:1582189200000,
        endTime: 1582192800000,
      }, {
        name: 'program 6',
        startTime:1582192800000,
        endTime: 1582200000000,
      }
    ]
  }, {
    channelId: 3,
    programs: [
      {
        name: 'program 1',
        startTime:1582181100000,
        endTime: 1582182000000,
      }, {
        name: 'program 2',
        startTime:1582182000000,
        endTime: 1582185600000,
      }, {
        name: 'program 3',
        startTime:1582185600000,
        endTime: 1582192800000,
      }, {
        name: 'program 4',
        startTime:1582192800000,
        endTime: 1582194600000,
      }, {
        name: 'program 5',
        startTime:1582194600000,
        endTime: 1582198200000,
      }, {
        name: 'program 6',
        startTime:1582198200000,
        endTime: 1582200000000,
      }
    ]
  }, {
    channelId: 11,
    programs: [
      {
        name: 'program 1',
        startTime:1582181100000,
        endTime: 1582182000000,
      }, {
        name: 'program 2',
        startTime:1582182000000,
        endTime: 1582185600000,
      }, {
        name: 'program 3',
        startTime:1582185600000,
        endTime: 1582192800000,
      }, {
        name: 'program 4',
        startTime:1582192800000,
        endTime: 1582194600000,
      }, {
        name: 'program 5',
        startTime:1582194600000,
        endTime: 1582198200000,
      }, {
        name: 'program 6',
        startTime:1582198200000,
        endTime: 1582200000000,
      }
    ]
  }, {
    channelId: 12,
    programs: [
      {
        name: 'program 1',
        startTime:1582181100000,
        endTime: 1582182000000,
      }, {
        name: 'program 2',
        startTime:1582182000000,
        endTime: 1582185600000,
      }, {
        name: 'program 3',
        startTime:1582185600000,
        endTime: 1582192800000,
      }, {
        name: 'program 4',
        startTime:1582192800000,
        endTime: 1582194600000,
      }, {
        name: 'program 5',
        startTime:1582194600000,
        endTime: 1582198200000,
      }, {
        name: 'program 6',
        startTime:1582198200000,
        endTime: 1582200000000,
      }
    ]
  }, {
    channelId: 13,
    programs: [
      {
        name: 'program 1',
        startTime:1582181100000,
        endTime: 1582182000000,
      }, {
        name: 'program 2',
        startTime:1582182000000,
        endTime: 1582185600000,
      }, {
        name: 'program 3',
        startTime:1582185600000,
        endTime: 1582192800000,
      }, {
        name: 'program 4',
        startTime:1582192800000,
        endTime: 1582194600000,
      }, {
        name: 'program 5',
        startTime:1582194600000,
        endTime: 1582198200000,
      }, {
        name: 'program 6',
        startTime:1582198200000,
        endTime: 1582200000000,
      }
    ]
  }
]

export default class App extends Component {
  render () {
    return (
      <div className={'container'} >
        <div className={'heading'} >
          EPG List 
        </div>
        <EPGBoard text='Modern React component module' channelPrograms={channelPrograms} channels={channels} />
      </div>
    )
  }
}
