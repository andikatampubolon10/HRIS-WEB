module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/HRIS-WEB/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/1b792_5039a909._.js",
  "chunks/[root-of-the-server]__c4c3c7ad._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/HRIS-WEB/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];