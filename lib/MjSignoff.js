'use strict'

function _typeof (obj) {
  '@babel/helpers - typeof'
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj
          }),
    _typeof(obj)
  )
}

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _reverse = _interopRequireDefault(require('lodash/reverse'))

var _mjmlCore = require('mjml-core')

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties (target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  Object.defineProperty(Constructor, 'prototype', { writable: false })
  return Constructor
}

function _inherits (subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  })
  Object.defineProperty(subClass, 'prototype', { writable: false })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf (o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf (o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
}

function _createSuper (Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct()
  return function _createSuperInternal () {
    var Super = _getPrototypeOf(Derived),
      result
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor
      result = Reflect.construct(Super, arguments, NewTarget)
    } else {
      result = Super.apply(this, arguments)
    }
    return _possibleConstructorReturn(this, result)
  }
}

function _possibleConstructorReturn (self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized (self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _isNativeReflectConstruct () {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === 'function') return true
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
    return true
  } catch (e) {
    return false
  }
}

function _getPrototypeOf (o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf (o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _defineProperty (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

var MjSignoff = /*#__PURE__*/ (function (_BodyComponent) {
  _inherits(MjSignoff, _BodyComponent)

  var _super = _createSuper(MjSignoff)

  function MjSignoff () {
    _classCallCheck(this, MjSignoff)

    return _super.apply(this, arguments)
  }

  _createClass(MjSignoff, [
    {
      key: 'renderImage',
      value: function renderImage () {
        return '\n      <mj-column\n        mj-class="signoff__image-wrapper"\n        css-class="column signoff__image-wrapper"\n        '
          .concat(
            this.htmlAttributes({
              width: this.getAttribute('image-width'),
              'background-color': this.getAttribute('background-color'),
            }),
            '\n      >\n        <mj-image\n          mj-class="signoff__image"\n          css-class="signoff__image"\n          '
          )
          .concat(
            this.htmlAttributes({
              padding: this.getAttribute('image-padding'),
              src: this.getAttribute('image-src'),
              width: this.getAttribute('image-width'),
              height: this.getAttribute('image-height'),
              alt: this.getAttribute('image-alt'),
            }),
            '\n        >\n        </mj-image>\n    </mj-column>\n    '
          )
      },
    },
    {
      key: 'renderText',
      value: function renderText () {
        var textContent = '\n      <mj-column\n        mj-class="signoff__text-wrapper"\n        css-class="column signoff__text-wrapper"\n        '
          .concat(
            this.htmlAttributes({
              'background-color': this.getAttribute('background-color'),
            }),
            '\n      >\n        <mj-text\n          mj-class="signoff__text"\n          css-class="signoff__text"\n          '
          )
          .concat(
            this.htmlAttributes({
              padding: this.getAttribute('text-column-padding'),
            }),
            '\n        >\n      '
          )

        if (this.getAttribute('closing')) {
          textContent += '<p class="signoff__closing">'.concat(
            this.getAttribute('closing'),
            '</p>'
          )
        }

        if (this.getAttribute('name')) {
          textContent += '<p class="signoff__name">'.concat(
            this.getAttribute('name'),
            '</p>'
          )
        }

        if (this.getAttribute('title')) {
          textContent += '<p class="signoff__title">'.concat(
            this.getAttribute('title'),
            '</p>'
          )
        }

        if (this.getAttribute('title2')) {
          textContent += '<p class="signoff__title2">'.concat(
            this.getAttribute('title2'),
            '</p>'
          )
        }

        if (this.getAttribute('title3')) {
          textContent += '<p class="signoff__title3">'.concat(
            this.getAttribute('title3'),
            '</p>'
          )
        }

        textContent += '\n          <div class="signoff__custom">\n            '.concat(
          this.getContent(),
          '\n          </div>\n        </mj-text>\n      </mj-column>\n    '
        )
        return textContent
      },
    },
    {
      key: 'render',
      value: function render () {
        var content = [this.renderText(), this.renderImage()]
        var orderedContent =
          this.getAttribute('image-position') === 'right'
            ? content
            : (0, _reverse['default'])(content)
        return this.renderMJML(
          '\n      <mj-section\n        mj-class="signoff"\n        css-class="signoff"\n        '
            .concat(
              this.htmlAttributes({
                padding: this.getAttribute('section-padding'),
                'background-color': this.getAttribute('background-color'),
                'text-align': this.getAttribute('section-align'),
              }),
              '\n      >\n        '
            )
            .concat(orderedContent, '\n      </mj-section>\n    ')
        )
      },
    },
  ])

  return MjSignoff
})(_mjmlCore.BodyComponent)

exports['default'] = MjSignoff

_defineProperty(MjSignoff, 'componentName', 'mj-signoff')

_defineProperty(MjSignoff, 'endingTag', true)

_defineProperty(MjSignoff, 'dependencies', {
  'mj-signoff': [],
  'mj-body': ['mj-signoff'],
  'mj-section': ['mj-signoff'],
  'mj-column': ['mj-signoff'],
  'mj-wrapper': ['mj-signoff'],
})

_defineProperty(MjSignoff, 'allowedAttributes', {
  closing: 'string',
  name: 'string',
  title: 'string',
  title2: 'string',
  title3: 'string',
  'section-padding': 'unit(px){4}',
  'section-align': 'enum(left,center,right)',
  'background-color': 'color',
  'image-position': 'enum(left,right)',
  'image-padding': 'unit(px){4}',
  'image-src': 'string',
  'image-width': 'unit(px,%)',
  'image-height': 'unit(px,%)',
  'image-alt': 'string',
  'text-column-padding': 'unit(px){4}',
})

_defineProperty(MjSignoff, 'defaultAttributes', {
  'section-padding': '10px 0',
  'section-align': 'left',
  'image-position': 'left',
  'image-padding': '0',
  'text-column-padding': '0 10px',
})
