const http = require("http");
const app = require("./app");
const CONSTANTS = require("./constants");
const {connectToDB} = require("./models/index");

const PORT = CONSTANTS.PORT || 5000;

async function startServer() {
  try {
    await connectToDB();

    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();
