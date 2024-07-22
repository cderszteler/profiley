import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"

export const tableName = process.env.DYNAMODB_TABLE_NAME

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY as string,
  },
  endpoint: process.env.DYNAMODB_SECRET_ENDPOINT as string,
  region: process.env.DYNAMODB_REGION as string
})
export const dynamo = DynamoDBDocumentClient.from(client)