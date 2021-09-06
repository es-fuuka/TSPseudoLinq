/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pseudoLinq.ts":
/*!***************************!*\
  !*** ./src/pseudoLinq.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object.defineProperties(Array.prototype, {
    // 'Aggregate': {
    //     configurable: false,
    //     enumerable: false,
    //     writable: false,
    //     value: function(this: Array<any>, aggregator: (n: any, elem: any) => any){
    //         let result = '';
    //         for (let item of this){
    //             result = aggregator(result, item);
    //         }
    //         return result;
    //     }
    // },
    'Aggregate': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (init, aggregator, resultSelector) {
            let result = init;
            for (let item of this) {
                result = aggregator(result, item);
            }
            return resultSelector ? resultSelector(result) : result;
        }
    },
    'All': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (predicate) {
            for (let item of this) {
                if (!predicate(item))
                    return false;
            }
            return true;
        }
    },
    'Any': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (predicate) {
            for (let item of this) {
                if (predicate(item))
                    return true;
            }
            return false;
        }
    },
    'Count': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (predicate) {
            if (!predicate)
                return this.length;
            return this.filter(x => predicate(x)).length;
        }
    },
    'FirstOrDefault': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (predicate) {
            for (let item of this) {
                if (predicate(item))
                    return item;
            }
            ;
            return undefined;
        }
    },
    'Select': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (selector) {
            const result = [];
            this.forEach(x => result.push(selector(x)));
            return result;
        }
    },
    'Where': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (predicate) {
            return this.filter(x => predicate(x));
        }
    },
});



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pseudoLinq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pseudoLinq */ "./src/pseudoLinq.ts");

const testArray = [0, 1, -1, -10, 10];
console.log(`test array = ${testArray}`);
// const aggre1 = testArray.Aggregate((n, elem) => n+elem*elem);
// console.log(`Aggregate((n, elem) => n+elem*elem) = ${aggre1}`);
const aggre = testArray.Aggregate(2, (n, elem) => n + (elem * elem));
console.log(`Aggregate1(2, (n, elem) => n+(elem*elem)) = ${aggre}`);
const all = testArray.All(x => x > 0);
console.log(`All(x=>x>0) = ${all}`);
const any = testArray.Any(x => x > 0);
console.log(`Any(x=>x>0) = ${any}`);
const count = testArray.Count(x => x >= 0);
console.log(`Count(x=>x>=0) = ${count}`);
const first = testArray.FirstOrDefault(x => Math.abs(x) > 5);
console.log(`FirstOrDefault(x=>Math.abs(x) > 5) = ${first}`);
const select = testArray.Select(x => x * x);
console.log(`Select(x=>x*x) = ${select}`);
const where = testArray.Where(x => x > 0);
console.log(`Where(x=>x>0) = ${where}`);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map