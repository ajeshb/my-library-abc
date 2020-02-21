import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class EPGBoard extends Component {
  static propTypes = {
    height: PropTypes.number,
    channelPrograms: PropTypes.arrayOf(PropTypes.object),
    channels: PropTypes.arrayOf(PropTypes.object),
    hourWidth: PropTypes.number,
    channelWidth: PropTypes.number,
    channelHeight: PropTypes.number
  }

  static defaultProps = {
    height: 600,
    channelPrograms: [],
    channels: [],
    hourWidth: 120,
    channelWidth: 120,
    channelHeight: 80
  }

  getProgramWidth = (start, end) => {
    const { hourWidth } = this.props
    const timeDiff = new Date(end).getTime() - new Date(start).getTime()
    const width = ((timeDiff / 1000) / (60 * 60)) * hourWidth
    console.log('width', width)
    return width
  }

  getStartingTime = () => {
    const { channelPrograms } = this.props
    const startingTime = channelPrograms.reduce((start, channel) => {
      if (channel.programs && channel.programs.length) {
        const firstProgramStart = new Date(channel.programs[0].startTime).getTime()
        if (start > firstProgramStart) {
          start = firstProgramStart
        }
      }
      return start
    }, channelPrograms[0].programs[0].startTime)
    return startingTime
  }

  render() {
    const { height, channelPrograms, channels, channelWidth, channelHeight } = this.props
    const startingTime = this.getStartingTime()
    return (
      <div className={styles.container} style={{ height: `${height}px` }}>
        <div className={styles.channelList} style={{ width: `${channelWidth}px` }}>
          {channels.map(channel =>
            (<div className={styles.channelTitle} style={{ height: `${channelHeight}px` }}>
              <p>{channel.name}</p>
            </div>
            ))
          }
        </div>
        <div className={styles.programlList}>
          {channels.map(channel => {
            const selectedChannel = channelPrograms.find(item => item.channelId === channel.id)
            const isPostStart = selectedChannel.programs && selectedChannel.programs.length ? new Date(selectedChannel.programs[0].startTime).getTime() > startingTime : false
            console.log('postion', isPostStart, this.getProgramWidth(startingTime, selectedChannel.programs[0].startTime))
            return <div className={styles.channelPrograms} style={{ height: `${channelHeight}px` }} >
              {isPostStart ? <div className={styles.programCell} style={{ height: `${channelHeight}px`, width: `${this.getProgramWidth(startingTime, selectedChannel.programs[0].startTime) - 2}px` }}  >
                <p>NA</p>
              </div> : null}
              {(selectedChannel ? (selectedChannel.programs || []) : []).map(program =>
                <div className={styles.programCell} style={{ height: `${channelHeight}px`, width: `${this.getProgramWidth(program.startTime, program.endTime) - 2}px`, left: `${this.getProgramWidth(startingTime, program.startTime)}px` }}>
                  <p>{program.name}</p>
                </div>
              )}
            </div>
          })}
        </div>
      </div>
    )
  }
}
