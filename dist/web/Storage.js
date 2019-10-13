"use strict";
/**
 * Storage.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform database storage abstraction.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RX = require("../common/Interfaces");
var Storage = /** @class */ (function (_super) {
    __extends(Storage, _super);
    function Storage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Storage.prototype.getItem = function (key) {
        var value = window.localStorage.getItem(key);
        return Promise.resolve(value === null ? undefined : value);
    };
    Storage.prototype.setItem = function (key, value) {
        try {
            window.localStorage.setItem(key, value);
        }
        catch (e) {
            return Promise.resolve(e);
        }
        return Promise.resolve(void 0);
    };
    Storage.prototype.removeItem = function (key) {
        window.localStorage.removeItem(key);
        return Promise.resolve(void 0);
    };
    Storage.prototype.clear = function () {
        window.localStorage.clear();
        return Promise.resolve(void 0);
    };
    return Storage;
}(RX.Storage));
exports.Storage = Storage;
exports.default = new Storage();
