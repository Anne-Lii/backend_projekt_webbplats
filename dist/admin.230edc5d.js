// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"b2mJY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "2993e5cb230edc5d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"cHucQ":[function(require,module,exports) {
//code written by Anne-Lii Hansen VT 2024
"use strict";
//URL
const foodUrl = "https://backend-projekt-api-2zmb.onrender.com/api/foods";
const drinkUrl = "https://backend-projekt-api-2zmb.onrender.com/api/drinks";
const bookingsUrl = "https://backend-projekt-api-2zmb.onrender.com/api/bookings";
let currentItem = null; //stores the current item beeing edited global
let isAddingNew = false; //flag for knowing if modal adds new or updates 
let currentEditingBooking = null; // Declare a global variable to store the currently editing booking
//Sections for different parts of the application
const bookingSection = document.getElementById("bookingsection");
const foodSection = document.getElementById("foodSection");
const drinkSection = document.getElementById("drinkSection");
const registrationSection = document.getElementById("registrationSection");
// Modals for adding/updating food, drinks and bookings
const updateModal = document.getElementById("updateModal"); //update food and drinks
const updateBookingModal = document.getElementById("updateBookingModal"); //update bookings modal
const foodModal = document.getElementById("addFoodModal"); //add food modal
const drinkModal = document.getElementById("addDrinkModal"); //add drinks modal
//form for booking
const bookingForm = document.getElementById("bookingForm"); //Booking Form to fill in
//Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", ()=>{
    // Event listener for the food link to show and edit food
    document.getElementById("link_edit_food").addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Fetch and display food items in different categories
        fetchFoodItemsAndDraw("sm\xe5r\xe4tter");
        fetchFoodItemsAndDraw("varmr\xe4tt");
        fetchFoodItemsAndDraw("dessert");
        // Display the food section and hide others
        foodSection.style.display = "block";
        bookingSection.style.display = "none";
        drinkSection.style.display = "none";
    });
    // Event listener for the drinks link to show and edit drinks
    document.getElementById("link_edit_drinks").addEventListener("click", function(event) {
        event.preventDefault();
        // Fetch and display drink items in different categories
        fetchDrinkItemsAndDraw("white");
        fetchDrinkItemsAndDraw("red");
        fetchDrinkItemsAndDraw("rose");
        fetchDrinkItemsAndDraw("champagne");
        fetchDrinkItemsAndDraw("drink");
        fetchDrinkItemsAndDraw("beer");
        fetchDrinkItemsAndDraw("alcoholfree");
        // Display the drinks section and hide others
        drinkSection.style.display = "block";
        bookingSection.style.display = "none";
        foodSection.style.display = "none";
    });
    // Function to fetch and draw food items based on category
    async function fetchFoodItemsAndDraw(category) {
        try {
            const foodItems = await fetchItems(foodUrl); // Fetch all food items      
            const filteredFoodItems = foodItems.filter((item)=>item.category.toLowerCase() === category.toLowerCase());
            drawItems(filteredFoodItems, getTableIdFromCategory(category)); // Draw food items in the right table
        } catch (error) {
            console.error("Error fetching food items:", error);
        }
    }
    // Function to get table ID based on category
    function getTableIdFromCategory(category) {
        switch(category.toLowerCase()){
            case "sm\xe5r\xe4tter":
                return "smallDishesTable";
            case "varmr\xe4tt":
                return "mainCoursesTable";
            case "dessert":
                return "dessertTable";
            case "white":
                return "whiteTable";
            case "red":
                return "redTable";
            case "rose":
                return "roseTable";
            case "champagne":
                return "champagneTable";
            case "drink":
                return "drinkTable";
            case "beer":
                return "beerTable";
            case "alcoholfree":
                return "alcoholfreeTable";
            default:
                return "";
        }
    }
    // Function to fetch and draw drink items based on category
    async function fetchDrinkItemsAndDraw(category) {
        try {
            const drinkItems = await fetchItems(drinkUrl);
            // Filter drinks based on category
            const filteredDrinkItems = drinkItems.filter((item)=>item.category.toLowerCase() === category.toLowerCase());
            drawItems(filteredDrinkItems, getTableIdFromCategory(category));
        } catch (error) {
            console.error("Error fetching drink items:", error);
        }
    }
    // Function to fetch items from the API
    async function fetchItems(url, type) {
        try {
            const response = await fetch(url);
            console.log(`Response status for ${url}:`, response.status);
            if (!response.ok) throw new Error(`Failed to fetch ${type} items`);
            return response.json();
        } catch (error) {
            throw error;
        }
    }
    // Function to draw items in a table
    function drawItems(items, tableId) {
        const table = document.getElementById(tableId);
        if (!table) {
            console.error(`Table with id '${tableId}' not found.`);
            return;
        }
        const tableBody = table.getElementsByTagName("tbody")[0];
        // Clear the existing rows in the table body
        tableBody.innerHTML = "";
        items.forEach((item)=>{
            const row = tableBody.insertRow();
            const cellCategory = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellDescription = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellEdit = row.insertCell(4);
            const cellDelete = row.insertCell(5);
            cellCategory.textContent = item.category;
            cellName.textContent = item.food || item.drinkname;
            cellDescription.textContent = item.description;
            cellPrice.textContent = item.price;
            //create edit button to every item on table
            const editButton = document.createElement("button");
            editButton.className = "btn btn-edit";
            editButton.onclick = ()=>{
                isAddingNew = false;
                showModal(item); //calling the function to show the Modal for editing
            };
            cellEdit.appendChild(editButton); //write to DOM
            //create delete button to every item on table
            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("data-id", item._id);
            deleteButton.className = "btn btn-delete";
            deleteButton.onclick = ()=>deleteItem(deleteButton.getAttribute("data-id"), item.category, item.food ? "food" : "drink"); // Use ID from data attribute in deleteItem function
            cellDelete.appendChild(deleteButton); //write to DOM
        });
        // Show the table after it has been filled
        table.style.display = "table";
    }
    // Get the <span> element that closes the modal
    const closeButtons = document.getElementsByClassName("close");
    // Add an event listener to each <span> to close the corresponding modal
    for(let i = 0; i < closeButtons.length; i++)closeButtons[i].onclick = function() {
        updateModal.style.display = "none";
        foodModal.style.display = "none";
        drinkModal.style.display = "none";
        updateBookingModal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, it closes
    window.onclick = function(event) {
        if (event.target == updateModal) updateModal.style.display = "none";
        else if (event.target == foodModal) foodModal.style.display = "none";
        else if (event.target == drinkModal) drinkModal.style.display = "none";
        else if (event.target == updateBookingModal) drinkModal.style.display = "none";
    };
    // Button to add new food item
    document.getElementById("addFoodButton").addEventListener("click", ()=>{
        isAddingNew = true;
        showFoodModal({
            category: "",
            food: "",
            description: "",
            price: ""
        }); // Set modal for adding new food
    });
    // Button to add new drink item
    document.getElementById("addDrinkButton").addEventListener("click", ()=>{
        isAddingNew = true;
        showDrinkModal({
            category: "",
            drinkname: "",
            description: "",
            price: ""
        }); // Set modal for adding new drink
    });
    // Function to show the update modal with the current item details
    function showModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("name").value = item ? item.food || item.drinkname : "";
        document.getElementById("description").value = item ? item.description : "";
        document.getElementById("price").value = item ? item.price : "";
        document.getElementById("category").value = item ? item.category.toLowerCase() : "";
        // Set the text of the submit button based on whether we're adding or updating an item
        const submitBtn = document.getElementById("submitBtn");
        // Add event listener to update isAddingNew flag when submitting
        submitBtn.addEventListener("click", function() {
            isAddingNew = false;
        });
        updateModal.style.display = "block";
    }
    // Function to show the add food modal
    function showFoodModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("foodname").value = item ? item.food : "";
        document.getElementById("fooddescription").value = item ? item.description : "";
        document.getElementById("foodprice").value = item ? item.price : "";
        document.getElementById("foodcategory").value = item ? item.category : "";
        // Set the text of the submit button based on whether we're adding or updating an item
        const addFoodSubmitBtn = document.getElementById("addFoodSubmitBtn");
        // Add event listener to update isAddingNew flag when submitting
        addFoodSubmitBtn.addEventListener("click", async function() {
            isAddingNew = true; // 
            foodModal.style.display = "none"; // Hide the modal after adding
        });
        foodModal.style.display = "block";
    }
    // Function to show the add drink modal
    function showDrinkModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("drinkname").value = item ? item.drinkname : "";
        document.getElementById("drinkdescription").value = item ? item.description : "";
        document.getElementById("drinkprice").value = item ? item.price : "";
        document.getElementById("drinkcategory").value = item ? item.category : "";
        // Set the text of the submit button based on whether we're adding or updating an item
        const addDrinkSubmitBtn = document.getElementById("addDrinkSubmitBtn");
        // Add event listener to update isAddingNew flag when submitting
        addDrinkSubmitBtn.addEventListener("click", function() {
            isAddingNew = true;
            drinkModal.style.display = "none";
        });
        drinkModal.style.display = "block";
    }
    // Event listener for adding a new food item
    document.getElementById("foodForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        // Check if all required fields have been filled
        const name = document.getElementById("foodname").value;
        const description = document.getElementById("fooddescription").value;
        const price = document.getElementById("foodprice").value;
        if (!name || !description || !price) {
            // Display a message if any field is missing
            const modalFieldMessage = foodModal.querySelector(".modalFieldMessage");
            modalFieldMessage.textContent = "Alla f\xe4lt m\xe5ste fyllas i";
            modalFieldMessage.style.display = "block";
            foodModal.style.display = "block";
            return;
        } else {
            const modalFieldMessage = foodModal.querySelector(".modalFieldMessage");
            modalFieldMessage.style.display = "none";
        }
        // get values from foodForm
        const foodItem = {
            category: document.getElementById("foodcategory").value,
            food: document.getElementById("foodname").value.toUpperCase(),
            description: document.getElementById("fooddescription").value,
            price: document.getElementById("foodprice").value
        };
        try {
            // Send a POST request to add food on the server
            const response = await fetch(foodUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(foodItem)
            });
            const data = await response.json();
            console.log("New food item added:", data);
        } catch (error) {
            console.error("Error adding new food item:", error);
        }
        const selectedCategory = document.getElementById("foodcategory").value.toLowerCase(); // Get choosen category and turn to small letters
        fetchFoodItemsAndDraw(selectedCategory); //update table
    });
    // Event listener for adding a new drink item
    document.getElementById("drinkForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        // Check if all required fields have been filled
        const name = document.getElementById("drinkname").value;
        const description = document.getElementById("drinkdescription").value;
        const price = document.getElementById("drinkprice").value;
        if (!name || !description || !price) {
            // Display a message if any field is missing
            const modalFieldMessage = drinkModal.querySelector(".modalFieldMessage");
            modalFieldMessage.textContent = "Alla f\xe4lt m\xe5ste fyllas i";
            modalFieldMessage.style.display = "block";
            drinkModal.style.display = "block";
            return;
        } else {
            const modalFieldMessage = drinkModal.querySelector(".modalFieldMessage");
            modalFieldMessage.style.display = "none";
        }
        // get values from drinkForm
        const drinkItem = {
            category: document.getElementById("drinkcategory").value,
            drinkname: document.getElementById("drinkname").value.toUpperCase(),
            description: document.getElementById("drinkdescription").value,
            price: document.getElementById("drinkprice").value
        };
        try {
            // Send a POST request to add drink on the server
            const response = await fetch(drinkUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(drinkItem)
            });
            await response.json();
        } catch (error) {
            console.error("Error adding new drink item:", error);
        }
        const selectedCategory = document.getElementById("drinkcategory").value.toLowerCase();
        fetchDrinkItemsAndDraw(selectedCategory); //update table
    });
    //function to handle update of drink and food items from form
    document.getElementById("updateForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        // Check if all required fields have been filled
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        if (!name || !description || !price) {
            // Display a message if any field is missing
            const modalFieldMessage = document.querySelector(".modalFieldMessage");
            modalFieldMessage.textContent = "Alla f\xe4lt m\xe5ste fyllas i";
            modalFieldMessage.style.display = "block";
            updateModal.style.display = "block";
            return;
        } else {
            const modalFieldMessage = document.querySelector(".modalFieldMessage");
            modalFieldMessage.style.display = "none";
        }
        const updatedItem = {
            food: currentItem.food ? document.getElementById("name").value.toUpperCase() : undefined,
            drinkname: currentItem.drinkname ? document.getElementById("name").value.toUpperCase() : undefined,
            description: document.getElementById("description").value,
            price: document.getElementById("price").value,
            category: document.getElementById("category").value
        };
        const apiUrl = currentItem.food ? foodUrl : drinkUrl;
        try {
            const response = await fetch(`${apiUrl}/${currentItem._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedItem)
            });
            if (!response.ok) throw new Error(isAddingNew ? "Failed to add new item" : "Failed to update item");
            await response.json();
            // Refresh the list of items or update the table directly
            if (currentItem.food || updatedItem.food) fetchFoodItemsAndDraw(currentItem.category);
            else fetchDrinkItemsAndDraw(currentItem.category);
            updateModal.style.display = "none";
        } catch (error) {
            console.error("Error updating or adding item:", error);
        }
    });
    // Function to delete an item based on its ID
    function deleteItem(id, category, type) {
        const apiUrl = type === "food" ? foodUrl : drinkUrl;
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        }).then((response)=>{
            if (!response.ok) throw new Error("Failed to delete item");
            return response.json();
        }).then((result)=>{
            console.log("Deleted item:", result);
            // Remove the item from the DOM, refresh the items list after deletion
            if (type === "food") fetchFoodItemsAndDraw(category);
            else fetchDrinkItemsAndDraw(category);
        }).catch((error)=>{
            console.error("Error deleting item:", error);
        });
    }
    //BOOKINGS
    const bookingList = document.getElementById("bookingList");
    // Event listener for the edit booking link to show and edit bookings
    document.getElementById("link_edit_bookings").addEventListener("click", function(event) {
        event.preventDefault();
        //change section displays
        bookingSection.style.display = "block";
        foodSection.style.display = "none";
        drinkSection.style.display = "none";
        // Fetch and display bookings
        fetchBookings();
    });
    //get bookings
    async function fetchBookings() {
        try {
            const response = await fetch(bookingsUrl);
            if (!response.ok) throw new Error("Network response was not ok");
            const bookings = await response.json();
            updateBookingList(bookings);
        } catch (error) {
            console.error("Error fetching bookings: ", error);
        }
    }
    //Function to update the booking list
    function updateBookingList(bookings) {
        // Sort bookings in bookingdates
        bookings.sort((a, b)=>new Date(a.date) - new Date(b.date));
        bookingList.innerHTML = ""; // Clear any existing bookings
        bookings.forEach((booking)=>{
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Bokning:</strong> ${booking.name} <br>
                <strong>Datum:</strong> ${new Date(booking.date).toLocaleDateString()} <br>
                <strong>Tid:</strong> ${booking.time} <br>
                <strong>Antal personer:</strong> ${booking.guests} <br>
                <strong>Epost:</strong> ${booking.email} <br>
                <strong>Telefonnummer:</strong> ${booking.phone} <br>
                <strong>Skapad:</strong> ${new Date(booking.created).toLocaleDateString()} <br>
            `;
            //Creates button to edit bookings for every booking
            const editButton = document.createElement("button");
            editButton.textContent = "Redigera";
            editButton.addEventListener("click", ()=>{
                currentEditingBooking = booking;
                editBooking(booking);
            });
            //Creates button to delete bookings for every booking
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Ta bort";
            deleteButton.addEventListener("click", ()=>{
                deleteBooking(booking._id);
            });
            // Add to DOM
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            bookingList.appendChild(listItem);
        });
    }
    //Function to delete bookings
    async function deleteBooking(id) {
        try {
            // Send a DELETE request to update the booking on the server
            const response = await fetch(`${bookingsUrl}/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) throw new Error("Network response was not ok");
            fetchBookings(); // Refresh the booking list
        } catch (error) {
            console.error("Error deleting booking:", error);
        }
    }
    //Function to edit bookings
    function editBooking(booking) {
        //Change date format to YYY-MM-DD
        const bookingDate = new Date(booking.date);
        const formattedDate = bookingDate.toISOString().split("T")[0];
        // Populate the form fields with the details of the booking being edited
        document.getElementById("bookingname").value = booking.name;
        document.getElementById("bookingemail").value = booking.email;
        document.getElementById("bookingphone").value = booking.phone;
        document.getElementById("bookingdate").value = formattedDate;
        document.getElementById("bookingtime").value = booking.time;
        document.getElementById("bookingguests").value = booking.guests;
        // Display the modal for editing
        updateBookingModal.style.display = "block";
    }
    //Handle update of items from form
    document.getElementById("updateBookingForm").addEventListener("submit", async function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        const name = document.getElementById("bookingname").value;
        const email = document.getElementById("bookingemail").value;
        const phone = document.getElementById("bookingphone").value;
        const date = document.getElementById("bookingdate").value;
        const time = document.getElementById("bookingtime").value;
        const guests = document.getElementById("bookingguests").value;
        if (!name || !email || !phone || !date || !time || !guests) {
            // Display a message if any field is missing
            const modalFieldMessage = document.querySelector(".modalFieldMessage");
            modalFieldMessage.textContent = "Alla f\xe4lt m\xe5ste fyllas i";
            modalFieldMessage.style.display = "block";
            updateBookingModal.style.display = "block";
            return;
        } else document.querySelector(".modalFieldMessage").style.display = "none"; // Hide the error message if all fields are filled in
        //save updated values from form
        const updatedBookingItem = {
            name,
            email,
            phone,
            date,
            time,
            guests
        };
        try {
            // Send a PUT request to update the booking on the server
            const response = await fetch(`${bookingsUrl}/${currentEditingBooking._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedBookingItem) // Convert the booking data to JSON format
            });
            // Check if the request was successful
            if (!response.ok) throw new Error("Failed to update booking");
            await response.json(); // Parse the response JSON (if needed)
            fetchBookings(); // Refresh the list of items or update the table directly
            updateBookingModal.style.display = "none";
        } catch (error) {
            console.error("Error updating or adding item:", error);
        }
    });
    window.addEventListener("click", (event)=>{
        if (event.target === updateBookingModal) updateBookingModal.style.display = "none";
    });
});

},{}]},["b2mJY","cHucQ"], "cHucQ", "parcelRequire4e03")

//# sourceMappingURL=admin.230edc5d.js.map
