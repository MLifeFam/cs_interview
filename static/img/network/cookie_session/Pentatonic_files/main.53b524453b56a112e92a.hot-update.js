webpackHotUpdate("main",{

/***/ "./src/pages/LoungeSoloCovers/LoungeSoloCovers.js":
/*!********************************************************!*\
  !*** ./src/pages/LoungeSoloCovers/LoungeSoloCovers.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MakingCoverButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MakingCoverButton */ "./src/components/MakingCoverButton/index.js");
/* harmony import */ var _components_PageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PageContainer */ "./src/components/PageContainer/index.js");
/* harmony import */ var _components_WeeklyBanner_WeeklyBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/WeeklyBanner/WeeklyBanner */ "./src/components/WeeklyBanner/WeeklyBanner.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SearchBar */ "./src/components/SearchBar/index.js");
/* harmony import */ var _components_CoverGrid_CoverGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CoverGrid/CoverGrid */ "./src/components/CoverGrid/CoverGrid.js");
/* harmony import */ var _images_MakingIcon_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/MakingIcon.svg */ "./src/images/MakingIcon.svg");
/* harmony import */ var _components_PageImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PageImage */ "./src/components/PageImage/index.js");
/* harmony import */ var _components_GenreButton_GenreButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/GenreButton/GenreButton */ "./src/components/GenreButton/GenreButton.js");
/* harmony import */ var _components_DifficultyButton_DifficultyButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/DifficultyButton/DifficultyButton */ "./src/components/DifficultyButton/DifficultyButton.js");
/* harmony import */ var _components_GridContainer_GridContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/GridContainer/GridContainer */ "./src/components/GridContainer/GridContainer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jongmin/GitHub/Pentatonic-Web/src/pages/LoungeSoloCovers/LoungeSoloCovers.js",
    _s = __webpack_require__.$Refresh$.signature();

















const QUERY_BAND = _apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query Query($queryBandFilter: QueryBandInput!) {
    queryBand(filter: $queryBandFilter) {
      bands {
        backGroundURI
        song {
          artist
          name
          weeklyChallenge
        }
        name
        isSoloBand
        isFreeBand
        likeCount
        viewCount
        bandId
        session {
          position
        }
      }
    }
  }
`;

const LoungeSoloCovers = ({
  match
}) => {
  _s();

  var _match$params;

  const content = (_match$params = match.params) === null || _match$params === void 0 ? void 0 : _match$params.content;
  const [genre, setGenre] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('전체');
  const [difficulty, setDifficulty] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('전체');
  const [bandFilter, setBandFilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    type: 'ALL',
    content: content,
    isSoloBand: true
  });

  const loadSoloCover = () => {
    if (data) {
      const filtered = data.queryBand.bands.filter(v => !v.isFreeBand && !v.song.weeklyChallenge);
      if (filtered.length > 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_GridContainer_GridContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        width: "95%",
        templateColumn: "250px",
        autoFill: true,
        children: filtered.map((v, i) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_CoverGrid_CoverGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
            data: v
          }, `bandData+${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 22
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined);else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(NoCover, {
          children: "\uB4F1\uB85D\uB41C \uCEE4\uBC84\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 16
        }, undefined);
      }
    }
  };

  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(QUERY_BAND, {
    variables: {
      queryBandFilter: bandFilter
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (genre !== '전체') {
      setBandFilter({ ...bandFilter,
        genre: genre
      });
    }
  }, [genre]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (difficulty !== '전체') {
      setBandFilter({ ...bandFilter,
        level: difficulty
      });
    }
  }, [difficulty]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(bandFilter);
  }, [bandFilter]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_PageContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_PageImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
      imgUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "\uC194\uB85C \uCEE4\uBC84"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(PageDesc, {
      children: content ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(SearchResult, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(SearchContent, {
          children: ["'", content, "'"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, undefined), "\uAC80\uC0C9 \uACB0\uACFC\uC785\uB2C8\uB2E4"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, undefined) : '유저들의 솔로 커버를 감상 해보세요'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      placeholder: "\uCEE4\uBC84 \uC81C\uBAA9, \uCEE4\uBC84 \uC18C\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
      sort: "solo",
      searching: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(SubContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(ButtonContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_GenreButton_GenreButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          genre: genre,
          setGenre: setGenre
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(Spacing, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_DifficultyButton_DifficultyButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
          difficulty: difficulty,
          setDifficulty: setDifficulty
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_components_MakingCoverButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        link: `/studio/solo`,
        title: "\uC0C8\uB85C\uC6B4 \uCEE4\uBC84 \uB9CC\uB4E4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined), loadSoloCover()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, undefined);
};

_s(LoungeSoloCovers, "hsARBCuNZANkbcZDV1CPWLJIzKE=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = LoungeSoloCovers;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
`;
_c2 = ButtonContainer;
const Spacing = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 1rem;
`;
_c3 = Spacing;
const PageDesc = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  font-size: 1rem;
  margin: 3rem 0;
  width: 80%;
  text-align: center;
`;
_c4 = PageDesc;
const SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  margin: 4rem 0 1rem;
  position: relative;
  width: 93%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
_c5 = SubContainer;
const SearchContent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span`
  color: #6236ff;
  font-size: 24px;
  font-weight: 800;
  padding: 0 0.5rem;
`;
_c6 = SearchContent;
const SearchResult = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -1px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
_c7 = SearchResult;
const NoCover = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  font-size: 1.4rem;
  color: #9b94b3;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 12rem;
  letter-spacing: -0.5px;
  font-weight: 800;
`;
_c8 = NoCover;
/* harmony default export */ __webpack_exports__["default"] = (LoungeSoloCovers);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

__webpack_require__.$Refresh$.register(_c, "LoungeSoloCovers");
__webpack_require__.$Refresh$.register(_c2, "ButtonContainer");
__webpack_require__.$Refresh$.register(_c3, "Spacing");
__webpack_require__.$Refresh$.register(_c4, "PageDesc");
__webpack_require__.$Refresh$.register(_c5, "SubContainer");
__webpack_require__.$Refresh$.register(_c6, "SearchContent");
__webpack_require__.$Refresh$.register(_c7, "SearchResult");
__webpack_require__.$Refresh$.register(_c8, "NoCover");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.53b524453b56a112e92a.hot-update.js.map