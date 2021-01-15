#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCwlogsToSlackStack } from '../lib/cdk-cwlogs-to-slack-stack';

const app = new cdk.App();
new CdkCwlogsToSlackStack(app, 'CdkCwlogsToSlackStack');
