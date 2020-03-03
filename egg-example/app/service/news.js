const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        // read config
        const { serverUrl, pagesSize} = this.config.news;

        

    }
}