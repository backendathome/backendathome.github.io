import { Octokit } from "https://esm.sh/octokit";

// fix height of vertical ruler
console.log(document.getElementById("paper").offsetHeight);
document.getElementById("y-ruler-bar").style.height = document.getElementById("paper").offsetHeight + 10 + "px";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `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` });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
async function check_github() {
    login = await octokit.request('GET /users/backendathome', {
        username: 'backendathome',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    console.log(login);
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

    var result = await octokit.request('POST /repos/backendathome/backendathome.github.io/actions/workflows/blank.yml/dispatches', {
        owner: 'backendathome',
        repo: 'backendathome.github.io',
        workflow_id: 'blank.yml',
        ref: 'main',
        inputs: {
            data: (usr +": " + txt)
        },
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    console.log("woo result");
    // await new Promise(res => setTimeout(res, 1000));
    console.log(result);
    var commit_check
    do {
        await new Promise(res => setTimeout(res, 5000));
        commit_check = await octokit.request('GET /repos/backendathome/backendathome.github.io/contents/new_changes', {
            owner: 'backendathome',
            repo: 'backendathome.github.io',
            path: 'new_changes',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
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
