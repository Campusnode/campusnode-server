import IORedis = require("ioredis");
import { Redis } from "ioredis";


export default class Cache {

    private _redis: Redis;

    get redis() {
        return this._redis;
    }

    constructor() {
        const options = {
            // TODO: Add in additional options: see https://github.com/luin/ioredis/blob/HEAD/API.md
            password: process.env.REDIS_PASSWORD
        }
        
        this._redis = new IORedis({
            ...options,
            keyPrefix: "campusnode:"
        });
    }

    async findInBlacklist(token: string): Promise<boolean> {
        return await this._redis.sismember('blacklist', token) === 1;
    }

    async setBlacklist(token: string) {
        const result = await this.redis.sadd('blacklist', token);
        return result;
    }
}