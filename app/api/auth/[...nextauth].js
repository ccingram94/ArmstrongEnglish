import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import NextAuth from "next-auth";
import { EmailProvider } from "next-auth/providers/email";
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"

const DynamoDBClientConfig = {
    credentials: {
      accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY,
    },
    region: process.env.NEXT_AUTH_AWS_REGION,
  };
  
  const client = DynamoDBDocument.from(new DynamoDB(config), {
    marshallOptions: {
      convertEmptyValues: true,
      removeUndefinedValues: true,
      convertClassInstanceToMap: true,
    },
  })
  
  export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
      }),
      // ...add more providers here
    ],
    adapter: DynamoDBAdapter(
      client, { tableName: NEXT_AUTH_TABLE_NAME },
    ),
  });