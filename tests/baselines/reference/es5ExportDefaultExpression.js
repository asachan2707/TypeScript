//// [es5ExportDefaultExpression.ts]

export default (1 + 2);


//// [es5ExportDefaultExpression.js]
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (1 + 2);


//// [es5ExportDefaultExpression.d.ts]
declare var _default: number;
export default _default;
