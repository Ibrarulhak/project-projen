/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import * as s3 from 'aws-cdk-lib/aws-s3';
import {
  BucketEncryption,
} from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';


export interface S3BucketProps extends s3.BucketProps {}

export class S3Bucket extends s3.Bucket {

  constructor(scope: Construct, id: string, props: S3BucketProps) {
    super(scope, id, {
      ...props,
      encryption: props.encryption ?? BucketEncryption.S3_MANAGED,
    });
  }

}
