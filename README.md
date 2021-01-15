# 使い方
```
git clone https://github.com/msato0731/cdk-cwlogs-to-slack.git
cd cdk-cwlogs-to-slack
npm install
```

## 必要な情報の書き換え
`lib.cdk-cwlogs-to-slack-stack.ts`以下を、必要に応じて書き換え。

- slackHookUrl
- slackChannel
- logGroup
- filterPattern

## Lambda関数のデプロイ
```
cdk deploy
```