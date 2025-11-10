# abort on errors
$ErrorActionPreference = "Stop"

# build
npm run build

# deploy dist to gh-pages
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
