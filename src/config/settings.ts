const ENVIRONMENTS = {
    stage: 'stage',
    prod: 'prod'
}

const ENV: string = process.env.ENV_TYPE || ENVIRONMENTS.stage;
const OPEN_API_KEY: string = process.env.OPEN_API_KEY;
const MERCHANT_ID: string = process.env.MERCHANT_ID;


export { ENV, OPEN_API_KEY, MERCHANT_ID };