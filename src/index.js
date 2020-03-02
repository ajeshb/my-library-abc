import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styles from './styles.css'

// const placeholder = require('./assets/channel-placeholder.png')
import PlaceholderImage from './placeholder'

export default class EPGBoard extends Component {
  static propTypes = {
    height: PropTypes.number,
    channelPrograms: PropTypes.arrayOf(PropTypes.object),
    channels: PropTypes.arrayOf(PropTypes.object),
    hourWidth: PropTypes.number,
    channelWidth: PropTypes.number,
    channelHeight: PropTypes.number,
    logoKey: PropTypes.string,
    channelCodeKey: PropTypes.string
  }

  static defaultProps = {
    height: 300,
    channelPrograms: [],
    channels: [],
    hourWidth: 240,
    channelWidth: 175,
    channelHeight: 80,
    logoKey: 'logo',
    channelCodeKey: 'code'
  }

  state = {
    currentTime: new Date().getTime()
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date().getTime() })
    }, 20 * 1000)
    setTimeout(() => {
      this.scrollToLive()
    }, 1000)
  }

  scrollToLive = () => {
    const { channelPrograms } = this.props
    const { startingTime, endingTime } = channelPrograms && channelPrograms.length ? this.getStartingTime() : {}
    if (startingTime < new Date().getTime() && endingTime > new Date().getTime() && this.programListElement) {
      const currentTimeNotifier = this.getProgramWidth(startingTime, new Date().getTime()) - 2
      // const programList = document.getElementById('program-list')
      const containerWidth = this.programListElement.offsetWidth
      this.programListElement.scrollLeft = currentTimeNotifier - containerWidth / 2
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  getFormattedTime = time => {
    return `${('0' + new Date(time).getHours()).slice(-2)}:${('0' + new Date(time).getMinutes()).slice(-2)}`
  }

  getProgramWidth = (start, end) => {
    const { hourWidth } = this.props
    const timeDiff = new Date(end).getTime() - new Date(start).getTime()
    const width = ((timeDiff / 1000) / (60 * 60)) * hourWidth
    return width
  }

  getTimeTracker = (from, to) => {
    const halfHourSec = 30 * 60 * 1000
    const baseLine = from - (from % halfHourSec)
    // let points = [{
    //   point: from,
    //   position: 0
    // }]
    let points = []
    for (let i = baseLine; i < to; i = i + halfHourSec) {
      const item = {
        point: i,
        position: this.getProgramWidth(from, i)
      }
      points.push(item)
    }
    // const endPoint = {
    //   point: to,
    //   position: this.getProgramWidth(from, to)
    // }
    // points.push(endPoint)
    return points
  }

  onClickScroll = scrollDirection => {
    if (scrollDirection === 'right') {
      this.programListElement.scrollLeft += 100
    } else {
      this.programListElement.scrollLeft -= 100
    }
  }

  scrollHorizontally = (isProgramList, event) => {
    const scrollTop = isProgramList ? this.scrollProgramList.scrollTop : this.scrollChannelList.scrollTop
    const ulta = `${!isProgramList ? 'true' : 'false'}${this.scrollChannelList.scrollLeft}${this.scrollProgramList.scrollLeft}`
    if (ulta === this.previousData) {
      this.count++
      if (this.count === 4) {
        this.count = 0
        return
      }
    }
    this.previousData = `${isProgramList ? 'true' : 'false'}${this.scrollProgramList.scrollLeft}${this.scrollChannelList.scrollLeft}`
    this.scrollChannelList.scrollTop = scrollTop
    this.scrollProgramList.scrollTop = scrollTop
    event.preventDefault()
    event.stopPropagation()
  }

  getStartingTime = () => {
    const { channelPrograms } = this.props
    const startingTime = _.cloneDeep(channelPrograms).reduce((start, channel) => {
      if (channel.programs && channel.programs.length) {
        const firstProgramStart = new Date(channel.programs[0].startTime).getTime()
        if (start > firstProgramStart) {
          start = firstProgramStart
        }
      }
      return start
    }, channelPrograms[0].programs[0].startTime)
    const lastIndex = channelPrograms[0].programs.length - 1
    const endingTime = _.cloneDeep(channelPrograms).reduce((end, channel) => {
      if (channel.programs && channel.programs.length) {
        const index = channel.programs.length - 1
        const lastProgramEnd = new Date(channel.programs[index].endTime).getTime()
        if (end < lastProgramEnd) {
          end = lastProgramEnd
        }
      }
      return end
    }, channelPrograms[0].programs[lastIndex].endTime)
    return { startingTime, endingTime }
  }

  render() {
    const { height, channelPrograms, channels, channelWidth, channelHeight, channelCodeKey, logoKey } = this.props
    const { currentTime } = this.state
    const { startingTime, endingTime } = channelPrograms && channelPrograms.length ? this.getStartingTime() : {}
    const timeTracker = this.getTimeTracker(startingTime, endingTime)
    const fullWidth = this.getProgramWidth(startingTime, endingTime)
    let currentTimeNotifier
    if (startingTime < new Date().getTime() && endingTime > new Date().getTime()) {
      currentTimeNotifier = this.getProgramWidth(startingTime, new Date().getTime()) - 2
    }
    return (
      <div className={styles.container} style={{ maxHeight: `${height}px` }}>
        <div className={styles.channelListContainer} style={{ width: `${channelWidth}px` }} >
          <div className={styles.channelList} style={{ width: `${channelWidth}px` }} ref={(node) => { this.scrollChannelList = node }} onScroll={(e) => this.scrollHorizontally(false, e)}>
            {channels.map((channel, index) =>
              (<div className={styles.channelTitle} style={{ height: `${channelHeight}px` }}>
                {channel[logoKey] ? <div className={styles.logo} style={{ backgroundImage: `url(${channel[logoKey]})` }} /> : <PlaceholderImage />}
                <p className={styles.channelCode}>{channel[channelCodeKey] || (index + 1)}</p>
              </div>
              ))
            }
          </div>
        </div>
        <div className={styles.programlList} ref={(node) => { this.programListElement = node }} style={{ width: `calc( 100% - ${channelWidth}px)` }}>
          <div className={styles.rightArrow} onClick={() => this.onClickScroll('right')} >
            <p>S</p>
          </div>
          <div className={styles.timer} style={{ width: `${fullWidth}px` }} >
            {timeTracker.map(time => <div className={styles.timeNote} style={{ left: `${time.position}px` }} >
              <p className={styles.time} >{this.getFormattedTime(time.point)}</p>
            </div>)}
          </div>
          {currentTimeNotifier ? <div className={styles.currentTime} style={{ left: `${currentTimeNotifier}px` }}>
            <div className={styles.currentTimeLabel} >{this.getFormattedTime(currentTime)}</div>
          </div> : null}
          <div className={styles.channelProgramList} style={{ width: `${fullWidth}px` }} ref={(node) => { this.scrollProgramList = node }} onScroll={(e) => this.scrollHorizontally(true, e)}>
            {channels.map(channel => {
              const selectedChannel = channelPrograms.find(item => item.id === channel.id)
              if (!selectedChannel) {
                return <div />
              }
              return <div className={styles.channelPrograms} style={{ height: `${channelHeight}px` }} >
                {selectedChannel.programs && selectedChannel.programs.length && startingTime < selectedChannel.programs[0].startTime
                  ? <div className={styles.emptyCell} style={{ height: `${channelHeight - 2}px`, width: `${this.getProgramWidth(startingTime, selectedChannel.programs[0].startTime) - 2}px` }}>
                    <p className={styles.programName} >N/A</p>
                  </div>
                  : null}
                {(selectedChannel ? (selectedChannel.programs || []) : []).map((program, index) => {
                  const isCurrentProgram = program.startTime < new Date().getTime() && program.endTime > new Date().getTime()
                  const isPreviousProgramMissing = index > 0 && program.startTime !== selectedChannel.programs[index - 1].endTime
                  return <React.Fragment>
                    {isPreviousProgramMissing ? <div className={styles.emptyCell} style={{ height: `${channelHeight - 2}px`, width: `${this.getProgramWidth(selectedChannel.programs[index - 1].endTime, program.startTime) - 2}px` }}>
                      <p className={styles.programName} >N/A</p>
                    </div> : null}
                    <div className={`${styles.programCell} ${isCurrentProgram ? styles.programCellCurrent : ''}`} style={{ height: `${channelHeight - 2}px`, width: `${this.getProgramWidth(program.startTime, program.endTime) - 2}px` }}>
                      <p className={styles.programName} >{program.name}</p>
                      <p className={styles.programDuration} >{`${this.getFormattedTime(program.startTime)} - ${this.getFormattedTime(program.endTime)}`}</p>
                    </div>
                  </React.Fragment>
                })}
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}
