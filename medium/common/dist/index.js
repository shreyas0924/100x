"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createPostInput: () => createPostInput,
  signinInput: () => signinInput,
  signupInput: () => signupInput,
  updatePostInput: () => updatePostInput
});
module.exports = __toCommonJS(src_exports);
var import_zod = require("zod");
var signupInput = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string(),
  name: import_zod.z.string().optional()
});
var signinInput = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string()
});
var createPostInput = import_zod.z.object({
  title: import_zod.z.string(),
  content: import_zod.z.string()
});
var updatePostInput = import_zod.z.object({
  title: import_zod.z.string().optional(),
  content: import_zod.z.string().optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPostInput,
  signinInput,
  signupInput,
  updatePostInput
});
