# Abort on errors
$ErrorActionPreference = "Stop"

Write-Host "Starting deployment..."

# 1️⃣ Build project
Write-Host "Building project..."
npm run build


# 3️⃣ Create a temporary branch from dist
Write-Host "Creating temporary branch from dist..."
git subtree split --prefix dist -b gh-pages-tmp

# 4️⃣ Force push to gh-pages
Write-Host "Pushing to gh-pages..."
git push -f origin gh-pages-tmp:gh-pages

# 5️⃣ Delete temporary branch
Write-Host "Cleaning up temporary branch..."
git branch -D gh-pages-tmp

Write-Host "Deployment complete! ✅"
