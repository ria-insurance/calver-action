const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const myToken = core.getInput('myToken');

    const octokit = github.getOctokit(myToken);

    const releases = await octokit.request('GET /repos/ria-insurance/calver-action/releases', {
        owner: 'ria-insurance',
        repo: 'calver-action',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

    // You can also pass in additional options as a second parameter to getOctokit
    // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});

    

    console.log(releases);
}

run();