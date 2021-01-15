import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as logs from '@aws-cdk/aws-logs'
import * as logsDestinations from '@aws-cdk/aws-logs-destinations'

export class CdkCwlogsToSlackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const slackHookUrl = "<SlackWebhookURL>"
    const slackChannel = "<SlackChannelID>"
    const logGroup = logs.LogGroup.fromLogGroupName(this, "loggroup", "testmessage.log")
    const filterPattern = logs.FilterPattern.allTerms("ERROR")

    const fn = new lambda.Function(this, "lambda-function", {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.lambda_handler',
      environment: {
        "slackHookUrl": slackHookUrl,
        "slackChannel": slackChannel
      }
    })

    new logs.SubscriptionFilter(this, "subscription", {
      logGroup: logGroup,
      destination: new logsDestinations.LambdaDestination(fn),
      filterPattern: filterPattern
    })
  
  }
}
