export const server = `
import { app } from "./app";

const PORT = process.env.API_PORT;

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\\nCheck it out on http://localhost:\${PORT}\`);
});
`;