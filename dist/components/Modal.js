"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModalModule = _interopRequireDefault(require("./Modal.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Modal(props) {
  const close = (0, _react.useCallback)(e => {
    e.stopPropagation();
    props.close();
  }, [props.close]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.show && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ModalModule.default['background']),
    onClick: close,
    "data-testid": "background"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_ModalModule.default['modal']),
    style: {
      padding: props.padding
    },
    "data-testid": "modal"
  }, props.closeBtn && /*#__PURE__*/_react.default.createElement("header", {
    onClick: close,
    "data-testid": "close-icon"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(_ModalModule.default['modal-btn__close'])
  }, "\xD7")), props.title && /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(_ModalModule.default['modal-title']),
    "data-testid": "title"
  }, props.title), props.textMessage && /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(_ModalModule.default['modal-text']),
    "data-testid": "message"
  }, props.textMessage))));
}

var _default = Modal;
exports.default = _default;
Modal.propTypes = {
  show: _propTypes.default.bool,
  close: _propTypes.default.func,
  padding: _propTypes.default.string,
  title: _propTypes.default.string,
  textMessage: _propTypes.default.string,
  closeBtn: _propTypes.default.bool
};