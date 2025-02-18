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
})({"f0HGD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    try {
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
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _recipeView = require("./views/recipeView");
var _recipeViewDefault = parcelHelpers.interopDefault(_recipeView);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultViewJs = require("./views/resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _addRecipeJs = require("./views/addRecipe.js");
var _addRecipeJsDefault = parcelHelpers.interopDefault(_addRecipeJs);
// if(module.hot){
//   module.hot.accept();
// }
const showRecipe = async function() {
    try {
        // getting the dynamyc id from the search bar after the hash change 
        const id = window.location.hash.slice(1);
        if (!id) return;
        // loading animation
        (0, _recipeViewDefault.default).showSpinner();
        await _model.loadRecipe(id); // not necessary to store in any variable
        // if success then we have access to the state 
        // rendering the fetched data
        (0, _recipeViewDefault.default).render(_model.state.recipe);
    } catch (err) {
        console.log(err);
        (0, _recipeViewDefault.default).showError();
    }
};
const displaySearchResult = async function() {
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        (0, _resultViewJsDefault.default).showSpinner();
        await _model.loadSearchResult(query);
        // console.log(modelData.state.search.results);
        // clear the field when search is completed
        (0, _searchViewJsDefault.default).clearInput();
        // render search result
        (0, _resultViewJsDefault.default).render(_model.getSearchResultPage());
        // render pagination
        (0, _paginationViewJsDefault.default).render(_model.getPaginationData());
    } catch (err) {
        console.log(err);
    }
};
const handlePageBtnClick = function(goToPage) {
    // render new search result on button click
    (0, _resultViewJsDefault.default).render(_model.getSearchResultPage(goToPage));
    // render new pagination buttons on button click
    (0, _paginationViewJsDefault.default).render(_model.getPaginationData());
};
const handleServingBtnClick = function(newServing) {
    _model.updateQuantity(newServing);
    // render the updated data
    // recpview.render(modelData.state.recipe);
    // just update the changes without rendering whole component
    (0, _recipeViewDefault.default).update(_model.state.recipe);
};
const handleToggleBookmark = function() {
    _model.toggleBookmark(_model.state.recipe);
    (0, _recipeViewDefault.default).update(_model.state.recipe);
    (0, _bookmarkViewJsDefault.default).render(_model.state.bookmarks);
};
const handleBookmarkOnLoad = function() {
    (0, _bookmarkViewJsDefault.default).render(_model.state.bookmarks);
};
const init = function() {
    (0, _bookmarkViewJsDefault.default).handleLocalBookmark(handleBookmarkOnLoad);
    (0, _recipeViewDefault.default).eventHandlerRendrer(showRecipe);
    (0, _searchViewJsDefault.default).handleSearchResult(displaySearchResult);
    (0, _paginationViewJsDefault.default).renderOnBtnClick(handlePageBtnClick);
    (0, _recipeViewDefault.default).servingChangeHandler(handleServingBtnClick);
    (0, _recipeViewDefault.default).bookmarkHandler(handleToggleBookmark);
};
init();

},{"./model":"Y4A21","./views/recipeView":"l60JC","./views/searchView.js":"9OQAM","./views/resultView.js":"f70O5","./views/paginationView.js":"6z7bi","./views/bookmarkView.js":"7YaI3","./views/addRecipe.js":"hsXJW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult);
parcelHelpers.export(exports, "getSearchResultPage", ()=>getSearchResultPage);
parcelHelpers.export(exports, "getPaginationData", ()=>getPaginationData);
parcelHelpers.export(exports, "updateQuantity", ()=>updateQuantity);
parcelHelpers.export(exports, "toggleBookmark", ()=>toggleBookmark);
var _config = require("./config");
var _helper = require("./helper");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        resultPerPage: (0, _config.RESULT_PER_PAGE),
        page: 1
    },
    bookmarks: []
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helper.getJSONdata)(`${(0, _config.API_URL)}${id}`);
        // console.log(data);
        // beautifying the data
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            ingredients: recipe.ingredients,
            servings: recipe.servings,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            cookingTime: recipe.cooking_time
        };
        // if any of the bookmark has same id as current id then show it as bookmarked.
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    // console.log(recipe);
    // console.log(state.recipe);
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const loadSearchResult = async function(query) {
    try {
        state.search.query = query;
        const searchData = await (0, _helper.getJSONdata)(`${(0, _config.API_URL)}?search=${query}`);
        if (searchData.results == 0) throw new Error("Invalid Search Results Not Found ;)");
        // console.log(searchData);
        state.search.results = searchData.data.recipes.map((recp)=>{
            const searchResult = {
                id: recp.id,
                title: recp.title,
                publisher: recp.publisher,
                image: recp.image_url
            };
            return searchResult;
        });
    // console.log(state.search)
    } catch (err) {
        throw err;
    }
};
const getSearchResultPage = function(pageNo = 1) {
    state.search.page = pageNo;
    const begin = (pageNo - 1) * state.search.resultPerPage;
    const end = pageNo * state.search.resultPerPage;
    return state.search.results.slice(begin, end);
};
const getPaginationData = function() {
    return state.search;
};
const updateQuantity = function(newServing) {
    const oldServing = state.recipe.servings;
    // updating quantities
    state.recipe.ingredients.forEach((ingredient)=>{
        const oldQuantity = ingredient.quantity;
        const newQuantity = newServing * oldQuantity / oldServing;
        ingredient.quantity = newQuantity;
    });
    // updating servings
    state.recipe.servings = newServing;
};
const toggleBookmark = function(recipe) {
    // state.bookmarks.push(recipe);
    if (recipe.id === state.recipe.id) {
        // state.recipe.bookmarked = true;
        if (state.recipe.bookmarked === false) {
            state.bookmarks.push(recipe);
            state.recipe.bookmarked = true;
        } else {
            let index = state.bookmarks.findIndex((curr)=>curr.id === recipe.id);
            if (index > -1) state.bookmarks.splice(index, 1);
            state.recipe.bookmarked = false;
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const localBookmark = function() {
    const local = localStorage.getItem("bookmarks");
    // console.log(`${local} hello`);
    if (local) state.bookmarks = JSON.parse(local);
};
localBookmark();

},{"./config":"k5Hzs","./helper":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
// reused const variables are stored here
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RESULT_PER_PAGE", ()=>RESULT_PER_PAGE);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SEC = 5;
const RESULT_PER_PAGE = 11;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
// reused important functions are stored here
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSONdata", ()=>getJSONdata);
var _config = require("./config");
const getJSONdata = async function(url) {
    try {
        const response = await Promise.race([
            fetch(url),
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        if (!response.ok) throw new Error(`unable to find the recipe`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ViewRecipe extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = `Recipe Not Found TRY Again!!!`;
    eventHandlerRendrer(handler) {
        // we want to add same eventListner to multiple different events
        [
            "hashchange",
            "load"
        ].forEach((event)=>window.addEventListener(event, handler));
    }
    servingChangeHandler(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const newServing = +btn.dataset.updateTo;
            if (newServing > 0) handler(newServing);
            else if (newServing <= 0) handler(1);
        });
    }
    bookmarkHandler(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateHtml() {
        const recipe = this._data;
        const html = `<figure class="recipe__fig">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${(0, _iconsSvgDefault.default)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${(0, _iconsSvgDefault.default)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${recipe.servings - 1}">
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${recipe.servings + 1}">
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${(0, _iconsSvgDefault.default)}#icon-bookmark${recipe.bookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${recipe.ingredients.map((ingredient)=>{
            return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ingredient.quantity}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ingredient.unit}</span>
          ${ingredient.description}
        </div>
      </li>`;
        }).join("")}
        
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${(0, _iconsSvgDefault.default)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
        return html;
    }
}
exports.default = new ViewRecipe(); // we are not exporting the whole class we are just exporting one instance

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("9bcc84ee5d265e38").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5cUXS":[function(require,module,exports) {
// this is the parent class for all the views
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        // making render method valid for pagination logic
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        this._clearExistingHtml();
        const markup = this._generateHtml();
        this._insertNewHtml("afterbegin", markup);
    }
    update(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const newMarkup = this._generateHtml(); // it is in to form of string
        const newDOM = document.createRange().createContextualFragment(newMarkup); // converted string to virtual DOM
        // fetching elements from our dom 
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const currentElements = Array.from(this._parentElement.querySelectorAll("*"));
        // comparing newly created markup and current markup
        newElements.forEach(function(newEle, i) {
            const curEle = currentElements[i];
            // text node is the firsChild node in an element 
            // it is null if there is no text
            if (!newEle.isEqualNode(curEle) && newEle.firstChild?.nodeValue.trim() !== "") curEle.textContent = newEle.textContent;
            // but still only the text on ui changes and not the acutal attributes
            if (!newEle.isEqualNode(curEle)) {
                const newAttributes = Array.from(newEle.attributes);
                newAttributes.forEach((attr)=>{
                    curEle.setAttribute(attr.name, attr.value);
                });
            }
        });
    }
    _clearExistingHtml() {
        this._parentElement.innerHTML = "";
    }
    _insertNewHtml(position, markup) {
        this._parentElement.insertAdjacentHTML(position, markup);
    }
    showSpinner() {
        const html = `<div class="spinner">
      <svg>
        <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
      </svg>
    </div>`;
        this._clearExistingHtml();
        this._insertNewHtml("afterbegin", html);
    }
    showError(errMessage = this._errorMessage) {
        const html = `<div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${errMessage}</p>
      </div>`;
        this._clearExistingHtml();
        this._insertNewHtml("afterbegin", html);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
// this module is handling the search bar
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ViewSearch {
    _parentSearchElement = document.querySelector(".search");
    getQuery() {
        return this._parentSearchElement.querySelector(".search__field").value;
    }
    clearInput() {
        this._parentSearchElement.querySelector(".search__field").value = "";
    }
    handleSearchResult(display) {
        this._parentSearchElement.addEventListener("submit", function(e) {
            e.preventDefault();
            display();
        });
    }
}
exports.default = new ViewSearch();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f70O5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ViewResult extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".results");
    _generateHtml() {
        const id = window.location.hash.slice(1);
        const res = this._data;
        const html = `${res.map((rec)=>{
            return `<li class="preview">
            <a class="preview__link ${rec.id === id ? "preview__link--active" : ""}" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
              </div>
            </a>
          </li>`;
        }).join("")}`;
        return html;
    }
}
exports.default = new ViewResult();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ViewPage extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".pagination");
    renderOnBtnClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            console.log(goToPage);
            handler(goToPage);
        });
    }
    _generateHtml() {
        const pageData = this._data;
        const pageNumber = pageData.page;
        const totalItem = pageData.results.length;
        const pageCapacity = pageData.resultPerPage;
        const remainingPages = Math.ceil(totalItem / pageCapacity) - pageNumber;
        if (pageNumber == 1 && remainingPages > 0) return `<button data-goto="${pageNumber + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${pageNumber + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>`;
        if (pageNumber > 1) {
            if (remainingPages > 0) return `<button data-goto="${pageNumber - 1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
              </svg>
              <span>Page ${pageNumber - 1}</span>
            </button>
            <button data-goto="${pageNumber + 1}" class="btn--inline pagination__btn--next">
              <span>Page ${pageNumber + 1}</span>
              <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
              </svg>
            </button>`;
            else if (remainingPages == 0) return `<button data-goto="${pageNumber - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${pageNumber - 1}</span>
        </button>`;
        // else return ``;
        }
    // else return '';
    }
}
exports.default = new ViewPage();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YaI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ViewBookmarks extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No Bookmarks Yet :(";
    handleLocalBookmark(handler) {
        window.addEventListener("load", handler);
    }
    _generateHtml() {
        const id = window.location.hash.slice(1);
        const res = this._data;
        const html = `${res.map((rec)=>{
            return `<li class="preview">
            <a class="preview__link }" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
              </div>
            </a>
          </li>`;
        }).join("")}`;
        return html;
    }
}
exports.default = new ViewBookmarks();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsXJW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddRecipe extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".upload");
    _windowElement = document.querySelector(".add-recipe-window");
    _overlayElement = document.querySelector(".overlay");
    _openButton = document.querySelector(".nav__btn--add-recipe");
    _closeButton = document.querySelector(".btn--close-modal");
    constructor(){
        super();
        this._handleShowModalWindow();
        this._handleHideModalWindow();
    }
    toggleWindow() {
        this._overlayElement.classList.toggle("hidden");
        this._windowElement.classList.toggle("hidden");
    }
    _handleShowModalWindow() {
        this._openButton.addEventListener("click", this.toggleWindow.bind(this));
    }
    _handleHideModalWindow() {
        this._closeButton.addEventListener("click", this.toggleWindow.bind(this));
        this._overlayElement.addEventListener("click", this.toggleWindow.bind(this));
    }
    _generateHtml() {}
}
exports.default = new AddRecipe();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f0HGD","aenu9"], "aenu9", "parcelRequire5e9f")

//# sourceMappingURL=index.e37f48ea.js.map
