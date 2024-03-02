import {javascript, typescript} from 'projen';
import {AwsCdkConstructLibrary, AwsCdkTypeScriptApp} from "projen/lib/awscdk";


const defaultReleaseBranch = 'main'
const nodeVersion = '20.10.0';
const packagesDir = 'packages';
const scope = '@sample';
const packagesPath = `${packagesDir}/${scope}`;
const cdkVersion = '2.130.0';
const constructVersion = '10.3.0'
const authorAddress = 'mtahir@cloudkitect.com';
const repoUrl = 'https://git-codecommit.us-east-1.amazonaws.com/v1/repos/sample';
const jsiiVersion = '~5.3.0';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: defaultReleaseBranch,
  name: 'sample-constructs',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  eslint: false,
  jest: false,
  github: false,
  licensed: false,
  sampleCode: false,
  docgen: false,
  copyrightOwner: 'CloudKitect Inc.',
  copyrightPeriod: '2024',
  buildWorkflow: false,
  releaseWorkflow: false,
  release: false,
  npmignoreEnabled: false,
  prettier: false,
  package: false,
  minNodeVersion: nodeVersion
});
project.compileTask.reset();
project.packageTask.reset();
project.addExcludeFromCleanup(`${packagesPath}/**`);
project.package.addField('workspaces', [
  `${packagesDir}/${scope}/components`,
  `${packagesDir}/${scope}/patterns`,
  './functional-tests'
]);
const exclusions = ['.DS_Store', '.idea', '*.iml']
project.gitignore.exclude(...exclusions)
project.synth();

const components = new AwsCdkConstructLibrary({
  authorAddress: authorAddress,
  parent: project,
  defaultReleaseBranch: defaultReleaseBranch,
  cdkVersion: cdkVersion,
  constructsVersion: constructVersion,
  author: 'Muhammad Tahir',
  repositoryUrl: repoUrl,
  jsiiVersion: jsiiVersion,
  name: `${scope}/components`,
  outdir: `${packagesPath}/components`,
  packageManager: project.package.packageManager,
  projenCommand: project.projenCommand,
  minNodeVersion: project.minNodeVersion,
  github: true,
  release: true,
  buildWorkflow: true,
  githubOptions: {
    mergify: false,
  },
  publishToPypi: {
    distName: 'sample.components',
    module: 'sample.components'
  },
  publishToNuget: {
    dotNetNamespace: 'Sample.Components',
    packageId: 'Sample.Components'
  },
});
components.synth();


const patterns = new AwsCdkConstructLibrary({
  authorAddress: authorAddress,
  parent: project,
  defaultReleaseBranch: defaultReleaseBranch,
  cdkVersion: cdkVersion,
  constructsVersion: constructVersion,
  author: 'Muhammad Tahir',
  repositoryUrl: repoUrl,
  jsiiVersion: jsiiVersion,
  name: `${scope}/patterns`,
  outdir: `${packagesPath}/patterns`,
  packageManager: project.package.packageManager,
  projenCommand: project.projenCommand,
  minNodeVersion: project.minNodeVersion,
  github: true,
  release: true,
  buildWorkflow: true,
  githubOptions: {
    mergify: false,
  },
});
patterns.addDeps(`${scope}/components`)
patterns.addPeerDeps(`${scope}/components`)
patterns.addDevDeps(`${scope}/components`)
patterns.synth();

const functionalTests = new AwsCdkTypeScriptApp({
  parent: project,
  defaultReleaseBranch: defaultReleaseBranch,
  cdkVersion: cdkVersion,
  constructsVersion: constructVersion,
  name: 'functional-tests',
  outdir: './functional-tests',
  packageManager: project.package.packageManager,
  projenCommand: project.projenCommand,
  minNodeVersion: project.minNodeVersion,
});
functionalTests.addDeps(
    `${scope}/components`,
    `${scope}/patterns`
)

const funcTestExclusions = ['cdk.out', 'cdk-context.json']
functionalTests.gitignore.exclude(...funcTestExclusions)
functionalTests.npmignore!.exclude(...funcTestExclusions)

functionalTests.synth();