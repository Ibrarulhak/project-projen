import { BucketPattern } from '@sample/patterns';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new BucketPattern(this, 'Pattern', {
      name: 'sample-bucket',
    });
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'functional-tests-dev', { env: devEnv });
// new MyStack(app, 'functional-tests-prod', { env: prodEnv });

app.synth();