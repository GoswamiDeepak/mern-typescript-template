import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    try {
        app.listen(Config.PORT, () => {
            logger.info(`Server is running on port ${Config.PORT}`);
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            logger.error(error.message);
        }
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }
};
startServer();
