/** @type { import("drizzle-kit").Config } */
export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
    url: 'postgresql://accounts:npg_1CRKokiWSJ4e@ep-restless-breeze-a4lc76i2-pooler.us-east-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
  }
};