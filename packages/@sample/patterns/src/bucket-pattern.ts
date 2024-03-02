/*
 * Copyright (c) CloudKitect Inc. All Rights Reserved.
 */

import { S3Bucket } from '@sample/components';
import { Construct } from 'constructs';


export interface BucketPatternProps {
  readonly name?: string;
}

export class BucketPattern extends Construct {

  constructor(scope: Construct, id: string, props: BucketPatternProps) {
    super(scope, id);

    new S3Bucket(this, 'Bucket', {
      bucketName: props.name,
    });
  }

}
