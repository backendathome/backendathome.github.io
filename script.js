import { Octokit } from "https://esm.sh/octokit";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `` });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
async function check_github() {
    const {
    data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);
}

check_github()

var loading_modal = document.getElementById("loading-dialog");
var dialup_tone = document.getElementById("loading-sound");
var form = document.getElementById("comment-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(form);

    // output as an object
    formData = Object.fromEntries(formData);


    loading_modal.showModal();
    add_change(formData.Name, formData.Textarea);

    form.reset();
});

async function add_change(usr, txt) {
    dialup_tone.play();

    // await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    //     owner: 'OWNER',
    //     repo: 'REPO',
    //     path: 'PATH',
    //     message: 'my commit message',
    //     committer: {
    //         name: 'Monalisa Octocat',
    //         email: 'octocat@github.com'
    //     },
    //     content: 'bXkgbmV3IGZpbGUgY29udGVudHM=',
    //     headers: {
    //         'X-GitHub-Api-Version': '2022-11-28'
    //     }
    // })
    // var result = await octokit.request('PUT /repos/RyanHornby/test/contents/new_changes', {
    //     owner: 'RyanHornby',
    //     repo: 'test',
    //     path: 'new_changes',
    //     message: 'new_update',
    //     committer: {
    //         name: 'Matthew Safar',
    //         email: 'matthewsafar@gmail.com'
    //     },
    //     content: btoa('text ' + usr + ' said: ' + txt + '\n'),
    //     sha: '8b137891791fe96927ad78e64b0aad7bded08bdc',
    //     headers: {
    //         'X-GitHub-Api-Version': '2022-11-28'
    //     }
    // });
    console.log("woo result");
    // await new Promise(res => setTimeout(res, 1000));
    console.log(result);
    var commit_check
    do {
        await new Promise(res => setTimeout(res, 5000));
        commit_check = await octokit.request('GET /repos/RyanHornby/test/contents/new_changes', {
            owner: 'RyanHornby',
            repo: 'test',
            path: 'new_changes',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        console.log(commit_check)
    } while (commit_check["data"]["content"] != "Cg==\n")
    loading_modal.close()
    window.location.reload()
}



// Show loading modal
function showLoadingModal() {
    document.getElementById("loading-dialog").showModalDialog();
}

function hideLoadingModal() {
    document.getElementById("loading-dialog").Modal;
}
