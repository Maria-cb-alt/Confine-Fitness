// Libs
import AppModel from "@models/appModel";
import LoggerFactory from "@loggerFactory";

// Data
const PORT = 443;

// Code
const server = AppModel.getServer();
server.listen(PORT, ()=> {
    const logger = LoggerFactory.createLogger('SERVER');
    logger.info('Server is online.');
});