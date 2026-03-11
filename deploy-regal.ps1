# Railway Deployment Script - Regal Price Tool
# Run this with: .\deploy-spotify.ps1

Write-Host "🚂 Deploying Regal Price Tool to Railway..." -ForegroundColor Cyan

# Check if Railway CLI is installed
if (-not (Get-Command railway -ErrorAction SilentlyContinue)) {
    Write-Host "`n❌ Railway CLI not found!" -ForegroundColor Red
    Write-Host "Install it with: npm install -g @railway/cli" -ForegroundColor Yellow
    Write-Host "Or: scoop install railway" -ForegroundColor Yellow
    exit 1
}

# Check if project directory exists
if (-not (Test-Path "C:\dev\regal-price-tool")) {
    Write-Host "`n❌ Project directory not found: C:\dev\regal-price-tool" -ForegroundColor Red
    exit 1
}

# Navigate to project
Push-Location "C:\dev\regal-price-tool"

try {
    # Pull latest code
    Write-Host "`n📥 Pulling latest code..." -ForegroundColor Yellow
    git pull
    if ($LASTEXITCODE -ne 0) { throw "Git pull failed" }

    # Install dependencies
    Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) { throw "npm install failed" }

    # Deploy to Railway
    Write-Host "`n🚂 Deploying to Railway..." -ForegroundColor Yellow
    railway up
    if ($LASTEXITCODE -ne 0) { throw "Railway deployment failed" }

    Write-Host "`n✅ Deployment complete!" -ForegroundColor Green
}
catch {
    Write-Host "`n❌ Deployment failed: $_" -ForegroundColor Red
    exit 1
}
finally {
    Pop-Location
}
