#!/bin/sh

cat template.html > index.html

cat new_changes >> changes

while IFS= read -r line; do
    change_type=`echo $line | cut -d" " -f1`
    change_vals=`echo $line | cut -d" " -f2-`
    case $change_type in
      text)
        echo "<pre>$change_vals</pre>" >> index.html
      ;;
      *)
      ;;
    esac
done < changes

cat template_end.html >> index.html

apk update
apk add git

git config --global user.name "Matthew Safar"
git config --global user.email "matthewsafar@gmail.com"

echo "" > new_changes

git add index.html
git add changes
git add new_changes
git commit -m "updated index.html"
git push
