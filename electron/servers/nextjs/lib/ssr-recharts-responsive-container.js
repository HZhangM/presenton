/**
 * SSR-safe wrapper for Recharts ResponsiveContainer.
 *
 * Problem: ResponsiveContainer defaults initialDimension to {width: -1, height: -1}.
 * In SSR, useEffect/ResizeObserver never fires, so dimensions stay -1 and the
 * component renders `null` (no chart output at all).
 *
 * Solution: This wrapper injects a reasonable initialDimension so charts render
 * with fixed dimensions during SSR. On the client, ResizeObserver takes over
 * and updates to actual measured dimensions.
 *
 * This module is swapped in via NormalModuleReplacementPlugin (server-only)
 * in next.config.mjs, replacing recharts/es6/component/ResponsiveContainer.
 * It imports from the CJS path (recharts/lib/...) to avoid circular aliasing.
 */
"use strict";

var React = require("react");
// Import from the CJS (lib/) path — the webpack alias only targets es6/ path,
// so this resolves to the original module without recursion.
var originalModule = require("recharts/lib/component/ResponsiveContainer");
var OriginalResponsiveContainer = originalModule.ResponsiveContainer;

var SSR_DEFAULT_WIDTH = 600;
var SSR_DEFAULT_HEIGHT = 400;

var SSRResponsiveContainer = React.forwardRef(function SSRResponsiveContainer(props, ref) {
    var width = props.width;
    var height = props.height;
    var maxHeight = props.maxHeight;

    // Compute reasonable initial dimensions for SSR
    var initW = typeof width === "number" ? width : SSR_DEFAULT_WIDTH;
    var initH = typeof height === "number" ? height : (maxHeight || SSR_DEFAULT_HEIGHT);

    return React.createElement(OriginalResponsiveContainer, Object.assign({}, props, {
        initialDimension: { width: initW, height: initH },
        ref: ref,
    }));
});

SSRResponsiveContainer.displayName = "SSRResponsiveContainer";

exports.ResponsiveContainer = SSRResponsiveContainer;
