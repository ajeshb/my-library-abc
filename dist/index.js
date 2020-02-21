'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n\n.styles_container__2pRR5 {\n  width: 100%;\n  border: 1px solid black;\n  display: flex;\n}\n.styles_channelList__10UNn{\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.styles_channelPrograms__3rQab{\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  border-bottom: 1px solid black;\n}\n.styles_programCell__1Nl1J{\n  border-left: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background: gray;\n}\n.styles_programlList__1OqEQ{\n  \n}\n.styles_channelPrograms__3rQab{\n  border: 1px solid black;\n}\n";
var styles = { "container": "styles_container__2pRR5", "channelList": "styles_channelList__10UNn", "channelPrograms": "styles_channelPrograms__3rQab", "programCell": "styles_programCell__1Nl1J", "programlList": "styles_programlList__1OqEQ" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var EPGBoard = function (_Component) {
  inherits(EPGBoard, _Component);

  function EPGBoard() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, EPGBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = EPGBoard.__proto__ || Object.getPrototypeOf(EPGBoard)).call.apply(_ref, [this].concat(args))), _this), _this.getProgramWidth = function (start, end) {
      var hourWidth = _this.props.hourWidth;

      var timeDiff = new Date(end).getTime() - new Date(start).getTime();
      var width = timeDiff / 1000 / (60 * 60) * hourWidth;
      console.log('width', width);
      return width;
    }, _this.getStartingTime = function () {
      var channelPrograms = _this.props.channelPrograms;

      var startingTime = channelPrograms.reduce(function (start, channel) {
        if (channel.programs && channel.programs.length) {
          var firstProgramStart = new Date(channel.programs[0].startTime).getTime();
          if (start > firstProgramStart) {
            start = firstProgramStart;
          }
        }
        return start;
      }, channelPrograms[0].programs[0].startTime);
      return startingTime;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(EPGBoard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          height = _props.height,
          channelPrograms = _props.channelPrograms,
          channels = _props.channels,
          channelWidth = _props.channelWidth,
          channelHeight = _props.channelHeight;

      var startingTime = this.getStartingTime();
      return React__default.createElement(
        'div',
        { className: styles.container, style: { height: height + 'px' } },
        React__default.createElement(
          'div',
          { className: styles.channelList, style: { width: channelWidth + 'px' } },
          channels.map(function (channel) {
            return React__default.createElement(
              'div',
              { className: styles.channelTitle, style: { height: channelHeight + 'px' } },
              React__default.createElement(
                'p',
                null,
                channel.name
              )
            );
          })
        ),
        React__default.createElement(
          'div',
          { className: styles.programlList },
          channels.map(function (channel) {
            var selectedChannel = channelPrograms.find(function (item) {
              return item.channelId === channel.id;
            });
            var isPostStart = selectedChannel.programs && selectedChannel.programs.length ? new Date(selectedChannel.programs[0].startTime).getTime() > startingTime : false;
            console.log('postion', isPostStart, _this2.getProgramWidth(startingTime, selectedChannel.programs[0].startTime));
            return React__default.createElement(
              'div',
              { className: styles.channelPrograms, style: { height: channelHeight + 'px' } },
              isPostStart ? React__default.createElement(
                'div',
                { className: styles.programCell, style: { height: channelHeight + 'px', width: _this2.getProgramWidth(startingTime, selectedChannel.programs[0].startTime) - 2 + 'px' } },
                React__default.createElement(
                  'p',
                  null,
                  'NA'
                )
              ) : null,
              (selectedChannel ? selectedChannel.programs || [] : []).map(function (program) {
                return React__default.createElement(
                  'div',
                  { className: styles.programCell, style: { height: channelHeight + 'px', width: _this2.getProgramWidth(program.startTime, program.endTime) - 2 + 'px', left: _this2.getProgramWidth(startingTime, program.startTime) + 'px' } },
                  React__default.createElement(
                    'p',
                    null,
                    program.name
                  )
                );
              })
            );
          })
        )
      );
    }
  }]);
  return EPGBoard;
}(React.Component);

EPGBoard.propTypes = {
  height: PropTypes.number,
  channelPrograms: PropTypes.arrayOf(PropTypes.object),
  channels: PropTypes.arrayOf(PropTypes.object),
  hourWidth: PropTypes.number,
  channelWidth: PropTypes.number,
  channelHeight: PropTypes.number
};
EPGBoard.defaultProps = {
  height: 600,
  channelPrograms: [],
  channels: [],
  hourWidth: 120,
  channelWidth: 120,
  channelHeight: 80
};

module.exports = EPGBoard;
//# sourceMappingURL=index.js.map
