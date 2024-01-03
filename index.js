const core = require('@actions/core');
const github = require('@actions/github');
const { version } = require('uuid');

async function createRelease(octokit, owner, repo, tag) {
    return octokit.request('POST /repos/'+ owner +'/'+ repo +'/releases', {
        owner: 'ria-insurance',
        repo: 'calver-action',
        tag_name: tag,
        target_commitish: 'main',
        name: tag,
        body: 'Description of the release',
        draft: false,
        prerelease: false,
        generate_release_notes: true,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
}

async function getRelease(owner, repo, tag) {
    return octokit.request('GET /repos/' + owner + '/' + repo + '/releases/tags/' + tag, {
        owner: 'OWNER',
        repo: 'REPO',
        tag: 'TAG',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
}

function getVersionPrefix(){
    currentDate = new Date().toLocaleString('en-gb', { timeZone: 'Asia/Kolkata' })
    currentDate = currentDate.split(',')[0]
    currentDate = currentDate.split('/')
    return currentDate[2] + '-' + currentDate[1] + '-' + currentDate[0];
}

async function createReleaseTag(octokit, owner, repo) {
    i = 0;
    versionPrefix = getVersionPrefix();
    while(true) {
        version1 = versionPrefix;
        if (i != 0){
            version1 = version + '.' + i;
        }
        release = getRelease(owner, repo, version);
        if (release.status == 404){
            return createRelease(octokit, owner, repo);
        }
    }
}

async function run() {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const myToken = core.getInput('myToken');

    const owner = core.getInput('owner');

    const repo = core.getInput("repo");

    const octokit = github.getOctokit(myToken);


    // You can also pass in additional options as a second parameter to getOctokit
    // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});

    release = await createReleaseTag(octokit, owner, repo);

    

    console.log(release);
}

run();