Write-Host "🚀 Husky hook iniciado..." -ForegroundColor Cyan

Write-Host "🔍 Executando lint-staged..." -ForegroundColor Yellow
npx lint-staged
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Erros encontrados pelo lint-staged. Commit cancelado." -ForegroundColor Red
  exit $LASTEXITCODE
}

Write-Host "✅ Lint-staged finalizado com sucesso!" -ForegroundColor Green
exit 0
