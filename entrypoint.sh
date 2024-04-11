#!/bin/sh

cat template.html > index.html

echo $1 >> changes

while IFS= read -r line; do
    change_type=`echo $line | cut -d" " -f1`
    change_vals=`echo $line | cut -d" " -f2- | sed 's/\&/\&amp/g' | sed 's/</\&lt/g' | sed 's/>/\&gt/g'`
    case $change_type in
      comment)
        echo "<pre>$change_vals</pre>" >> index.html
      ;;
      *)
      ;;
    esac
done < changes

cat template_end.html >> index.html

apk update
apk add git

git config --global user.name "backendathome"
git config --global user.email "backendathome@gmail.com"

git add index.html
git add changes
git commit -m "updated index.html"
git push

