# Github comments (now with javascript)

Hey ryan, working on the github website idea.

So, you can call the github api from javascript in the browser. To do so, go the "script.js" and add your personal access token, and edit the api request in the `add_changes()` function to reflect the repo you would like to commit to.

I couldn't find a way to update a file, so instead what it does is it commits a new file, and then the github action merges it into "changes" and then removes the "new_changes" file afterwards.

## The Issue
while I can get "changes" to change, I can't seem to get "index.html" to update. It's odd, and I'm not sure where to start debugging on that one.

## To run
To run this, you will need to set up an http server. I did mine by just doing the python one:

```bash
cd /path/to/repository/test
python3 -m http.server
```

Then, if you've set up your script.js properly to commit to the right place with your auth token, you should be able to post a comment.

After hitting "post comment", you'll want to `git pull` a few times until you see the changes happen (namely, "changes" being changed and "new_changes" being removed)

Would also recommend opening up the firefox inspector and going to console to see the javascript running.
