// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var radioBtn = Array.from(document.querySelectorAll(".percent"));
var numPeople = document.querySelector(".num__people");
var bill = document.querySelector(".bill");
var custom = document.querySelector(".custom");
var resetBtn = document.querySelector(".reset");
var numberRegex = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
var form = document.querySelector(".form");
var validate = false; //console.log(bill)

var totalAmount = 0;
var totalTipAmount = 0;
var totalAmountWithTip = 0;
var tipPerPerson = 0;
var totalPerPerson = 0;
console.log(validate);

if (Number(numPeople.value) <= 0) {
  resetBtn.disabled = true;
} else {
  resetBtn.disabled = false;
}

radioBtn.forEach(function (item) {
  item.addEventListener("change", function (evt) {
    // console.log(evt.target.value)
    // console.log(bill.value)
    // calculateBill(evt.target) 1
    calculateBill(bill.value, evt.target.value, numPeople.value);
  });
});

function validateNumbers(numToValidate, element, errSpan) {
  var rate = 5; // default rate percentage to be used

  console.log(radioBtn);
  console.log(custom); // check if a radio button is checked, if checked
  // use the value of the checked button as the rate

  var radioFiltered = radioBtn.filter(function (btn) {
    return btn.checked === true;
  }); // if radioFiltered contains an empty array , then no radio
  // button is selected - meaning that the custom button is to be used

  if (radioFiltered.length === 0) {
    rate = Number(custom.value);
  } else {
    rate = Number(radioFiltered[0].value);
  }

  console.log(radioFiltered);
  console.log(rate);

  if (numToValidate) {
    // console.log(validate)
    if (Number(numPeople.value) <= 0 || Number(bill.value) <= 0) {
      resetBtn.disabled = true;
      errSpan.innerHTML = "Number can't be zero or less";
    } else {
      resetBtn.disabled = false;
    }

    if (Number(element.value) <= 0) {
      // console.log("not a number")
      errSpan.classList.remove("hide__err");
      element.classList.remove("correct__format");
      element.classList.add("wrong__format");
      calculateDisplayTotals("0", "0");
      errSpan.innerHTML = "Number can't be zero or less"; //  resetBtn.disabled = false
    } else {
      errSpan.classList.add("hide__err");
      element.classList.add("correct__format");
      element.classList.remove("wrong__format");
      calculateBill(bill.value, rate, numPeople.value); // calculateBill(bill) 1
      // resetBtn.disabled = false
    }
  } else {
    //  console.log("not a number")
    errSpan.classList.remove("hide__err");
    element.classList.remove("correct__format");
    element.classList.add("wrong__format");
    errSpan.innerHTML = "Not a number";
    calculateDisplayTotals("0", "0"); // resetBtn.disabled = true
  }
}

bill.addEventListener("input", function (evt) {
  var validNum = numberRegex.test(bill.value);
  var billErr = document.querySelector(".bill__err");
  validateNumbers(validNum, bill, billErr);
});
numPeople.addEventListener("input", function (evt) {
  var validNum = numberRegex.test(numPeople.value);
  var peopleErr = document.querySelector(".people__err");
  validateNumbers(validNum, numPeople, peopleErr);
});
custom.addEventListener("focus", function (evt) {
  // console.log(evt.target)
  radioBtn.forEach(function (item) {
    item.checked = false;
  });
});
custom.addEventListener("input", function (evt) {
  // console.log(custom.value)
  //  calculateBill(custom) 1
  custom.checked = true;
  calculateBill(bill.value, custom.value, numPeople.value);
});

function calculateBill(billedAmount, rate, numpeople) {
  if (billedAmount === "" || Number(billedAmount <= 0)) {
    return;
  } else {
    totalAmount = Number(billedAmount);
  }

  if (numpeople === "" || Number(numpeople) <= 0) {
    return;
  }

  totalTipAmount = totalAmount * Number(rate) / 100; //evt.target

  totalAmountWithTip = totalAmount + totalTipAmount;
  tipPerPerson = totalTipAmount / Number(numpeople);
  totalPerPerson = totalAmountWithTip / Number(numpeople);
  validate = true;
  display();
  return true;
}
/*
function calculateBill(billedAmount) {
   
    if (bill.value === "" || Number(bill.value) <= 0) {
        //if the bill is an empty string (no data has been entered) or
        // if the bill entered is less that or equal to 0 , then return without doing anything
        // console.log("escape")
        return false
    }
    else {
        totalAmount = Number(bill.value)
        //  console.log(bill.value !== "" || Number(bill.value) >= 0)
        //   console.log(`total amount is: ${totalAmount}`)
        if (numPeople.value === "" || Number(numPeople.value) <= 0) {
            // console.log("do nothing")
            // validate = false
            return false
        } else {

            totalTipAmount = totalAmount * Number(billedAmount.value) / 100 //evt.target
            totalAmountWithTip = totalAmount + totalTipAmount
            tipPerPerson = totalTipAmount / Number(numPeople.value)
            totalPerPerson = totalAmountWithTip / Number(numPeople.value)
            validate = true

            display()
            return true
        }
    }

}
*/


function calculateDisplayTotals(tips, totals) {
  var dollarsUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  var displayTip = document.querySelector(".tip__value");
  var displayTotalAmount = document.querySelector(".total__value");
  displayTip.value = dollarsUS.format(tips);
  displayTotalAmount.value = dollarsUS.format(totals); //displayTip.innerHTML = dollarsUS.format(tips)
  // displayTotalAmount.innerHTML = dollarsUS.format(totals)
}

function display() {
  calculateDisplayTotals(tipPerPerson, totalPerPerson);
}

form.addEventListener("reset", function (evt) {
  // evt.preventDefault()
  totalAmount = 0;
  totalTipAmount = 0;
  totalAmountWithTip = 0;
  tipPerPerson = 0;
  totalPerPerson = 0;
  resetBtn.disabled = true;
  console.log("form reset");
});
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55427" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map