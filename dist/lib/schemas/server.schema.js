"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
exports.server = "\nimport { app } from \"./app\";\n\nconst PORT = process.env.API_PORT;\n\napp.listen(PORT, () => {\n  console.log(`Server is running on port ${PORT}\\nCheck it out on http://localhost:${PORT}`);\n});\n";
