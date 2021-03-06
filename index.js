const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}`);
  const time = (new Date()).toTimeString();
  core.setOutput('time', time);

  //get JSON payload from event that triggered this workflow
  const payLoad = JSON.stringify(github.context.payload, undefined, 2);
  console.console.log(`Event Payload: ${payLoad}`);
} catch (e) {
  core.setFailed(error.message);
}
