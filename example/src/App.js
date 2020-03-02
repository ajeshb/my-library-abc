import React, { Component } from 'react'

import EPGBoard from 'my-library'

const defaultChannels = [
  {
    id: 1,
    title: 'Speed X 1',
    logo: 'https://s3.amazonaws.com/styckiestore/staticimages/frontend/logogreen.svg'
  }, {
    id: 2,
    title: 'Sony 1',
    logo: 'https://s3.amazonaws.com/styckiestore/uploads/images/categories/catering_popular_icon_original.png'
  }, {
    id: 3,
    title: 'Marvel 1'
  }, {
    id: 11,
    title: 'Speed X 2',
    logo: 'https://s3.amazonaws.com/styckiestore/staticimages/frontend/wedding.png'
  }, {
    id: 12,
    title: 'Sony 2'
  }, {
    id: 13,
    title: 'Marvel 2'
  }
]

const defaultChannelPrograms = [
  {
    id: 1,
    programs: [
      {
        name: 'Program 2',
        startTime:new Date().getTime() - 6 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
      // }, {
      //   name: 'Program 3',
      //   startTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
      //   endTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
      }, {
        name: 'Program 4',
        startTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 5',
        startTime:new Date().getTime() - 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 6',
        startTime: new Date().getTime() - 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 1 * 60 * 60 * 1000,
      }, {
        name: 'Program 7',
        startTime: new Date().getTime() - 1 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 1 * 60 * 1000,
      }, {
        name: 'Program 8',
        startTime:new Date().getTime() + 1 * 60 * 1000,
        endTime: new Date().getTime() + 2 * 60 * 60 * 1000,
      }, {
        name: 'Program 9',
        startTime: new Date().getTime() + 2 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 10',
        startTime: new Date().getTime() + 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4 * 60 * 60 * 1000,
      }, {
        name: 'Program 11',
        startTime:new Date().getTime() + 4 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 12',
        startTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 7 * 60 * 60 * 1000,
      }
    ]
  }, {
    id: 2,
    programs: [
      {
        name: 'Program 1',
        startTime: new Date().getTime() - 7 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 2',
        startTime: new Date().getTime() - 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 4 * 60 * 60 * 1000,
      }, {
        name: 'Program 3',
        startTime: new Date().getTime() - 4 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 4',
        startTime: new Date().getTime() - 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 2 * 60 * 60 * 1000,
      }, {
        name: 'Program 5',
        startTime: new Date().getTime() - 2 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 0 * 60 * 60 * 1000,
      }, {
        name: 'Program 6',
        startTime: new Date().getTime() + 0 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 1 * 60 * 60 * 1000,
      }, {
        name: 'Program 7',
        startTime: new Date().getTime() + 1 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 8',
        startTime: new Date().getTime() + 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 9',
        startTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 5.25 * 60 * 60 * 1000,
      }, {
        name: 'Program 10',
        startTime: new Date().getTime() + 5.25 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 5.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 12',
        startTime: new Date().getTime() + 5.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 6 * 60 * 60 * 1000,
      }, {
        name: 'Program 13',
        startTime: new Date().getTime() + 6 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 7 * 60 * 60 * 1000,
      }
    ]
  }, {
    id: 3,
    programs: [
      {
        name: 'Program 1',
        startTime: new Date().getTime() - 7 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 6 * 60 * 60 * 1000,
      }, {
        name: 'Program 2',
        startTime:new Date().getTime() - 6 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 3',
        startTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
      }, {
        name: 'Program 4',
        startTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 5',
        startTime:new Date().getTime() - 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 6',
        startTime: new Date().getTime() - 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 1 * 60 * 60 * 1000,
      }, {
        name: 'Program 7',
        startTime: new Date().getTime() - 1 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 0 * 60 * 60 * 1000,
      }, {
        name: 'Program 8',
        startTime:new Date().getTime() - 0 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 2 * 60 * 60 * 1000,
      }, {
        name: 'Program 9',
        startTime: new Date().getTime() + 2 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 10',
        startTime: new Date().getTime() + 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4 * 60 * 60 * 1000,
      }, {
        name: 'Program 11',
        startTime:new Date().getTime() + 4 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 12',
        startTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 7 * 60 * 60 * 1000,
      }
    ]
  }, {
    id: 11,
    programs: [
      {
        name: 'Program 1',
        startTime: new Date().getTime() - 7 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 6 * 60 * 60 * 1000,
      }, {
        name: 'Program 2',
        startTime:new Date().getTime() - 6 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 3',
        startTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
      }, {
        name: 'Program 4',
        startTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 5',
        startTime:new Date().getTime() - 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 6',
        startTime: new Date().getTime() - 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 1 * 60 * 60 * 1000,
      }, {
        name: 'Program 7',
        startTime: new Date().getTime() - 1 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 0 * 60 * 60 * 1000,
      }, {
        name: 'Program 8',
        startTime:new Date().getTime() - 0 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 2 * 60 * 60 * 1000,
      }, {
        name: 'Program 9',
        startTime: new Date().getTime() + 2 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 10',
        startTime: new Date().getTime() + 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4 * 60 * 60 * 1000,
      }, {
        name: 'Program 11',
        startTime:new Date().getTime() + 4 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 12',
        startTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 7 * 60 * 60 * 1000,
      }
    ]
  }, {
    id: 12,
    programs: [
      {
        name: 'Program 1',
        startTime: new Date().getTime() - 7 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 6 * 60 * 60 * 1000,
      }, {
        name: 'Program 2',
        startTime:new Date().getTime() - 6 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 3',
        startTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
      }, {
        name: 'Program 4',
        startTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 5',
        startTime:new Date().getTime() - 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 6',
        startTime: new Date().getTime() - 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 1 * 60 * 60 * 1000,
      }, {
        name: 'Program 7',
        startTime: new Date().getTime() - 1 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 0 * 60 * 60 * 1000,
      }, {
        name: 'Program 8',
        startTime:new Date().getTime() - 0 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 2 * 60 * 60 * 1000,
      }, {
        name: 'Program 9',
        startTime: new Date().getTime() + 2 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 10',
        startTime: new Date().getTime() + 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4 * 60 * 60 * 1000,
      }, {
        name: 'Program 11',
        startTime:new Date().getTime() + 4 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 12',
        startTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 7 * 60 * 60 * 1000,
      }
    ]
  }, {
    id: 13,
    programs: [
      {
        name: 'Program 1',
        startTime: new Date().getTime() - 7 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 6 * 60 * 60 * 1000,
      }, {
        name: 'Program 2',
        startTime:new Date().getTime() - 6 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 3',
        startTime: new Date().getTime() - 5.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
      }, {
        name: 'Program 4',
        startTime: new Date().getTime() - 5.25 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 5',
        startTime:new Date().getTime() - 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 6',
        startTime: new Date().getTime() - 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 1 * 60 * 60 * 1000,
      }, {
        name: 'Program 7',
        startTime: new Date().getTime() - 1 * 60 * 60 * 1000,
        endTime: new Date().getTime() - 0 * 60 * 60 * 1000,
      }, {
        name: 'Program 8',
        startTime:new Date().getTime() - 0 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 2 * 60 * 60 * 1000,
      }, {
        name: 'Program 9',
        startTime: new Date().getTime() + 2 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 3 * 60 * 60 * 1000,
      }, {
        name: 'Program 10',
        startTime: new Date().getTime() + 3 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4 * 60 * 60 * 1000,
      }, {
        name: 'Program 11',
        startTime:new Date().getTime() + 4 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
      }, {
        name: 'Program 12',
        startTime: new Date().getTime() + 4.5 * 60 * 60 * 1000,
        endTime: new Date().getTime() + 7 * 60 * 60 * 1000,
      }
    ]
  }
]

const channelURL = 'http://feed.entertainment.tv.theplatform.com/f/tzTJhC/dgnlsl30-all-stations?byListingTime=2020-02-20T00%3A00%3A00Z~2020-02-28T17%3A00%3A00Z&byLocationId=http%3A%2F%2Fdata.entertainment.tv.theplatform.com%2Fentertainment%2Fdata%2FLocation%2F309639718595&range=-1'
const programURL = 'http://feed.entertainment.tv.theplatform.com/f/tzTJhC/dgnlsl30-all-channel-schedules?byChannelNumber=7&byListingTime=2020-02-20T00%3A00%3A00Z~2020-02-28T17%3A00%3A00Z&byLocationId=http%3A%2F%2Fdata.entertainment.tv.theplatform.com%2Fentertainment%2Fdata%2FLocation%2F309639718595&range=-1'

export default class App extends Component {
  state = {
    channels: [],
    channelPrograms: []
  }

  componentWillMount = () => {
    this.getChannelList()
    this.getChannelPrograms()
  }

  getChannelList = () => {
    fetch(channelURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            channels: result.entries
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  getChannelPrograms = () => {
    fetch(programURL)
      .then(res => res.json())
      .then((result) => {
          const { entries } = result
          const channelPrograms = entries.map( channel =>  {
            const programs = channel.listings.map(program => {
              return { 
                startTime: program.startTime,
                endTime: program.endTime,
                name: program.program.title
              }
            })
            return { 
              programs,
              title: channel.title,
              id: channel.id
            }
          })
          this.setState({
            channelPrograms: channelPrograms
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render () {
    const { channelPrograms, channels } = this.state
    return (
      <div className={'container'} >
        <div className={'heading'} >
          EPG List 
        </div>
        <EPGBoard 
          hourWidth={480} 
          channelWidth={175} 
          height={400}
          logoKey='logo'
          channelCodeKey='code'
          channelPrograms={channelPrograms} 
          channels={channels} 
        />
      </div>
    )
  }
}
