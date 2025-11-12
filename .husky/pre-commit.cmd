@echo off
chcp 65001 >nul

echo 🚀 Husky hook iniciado...

echo 🔍 Executando lint-staged...
call npx lint-staged
set result=%errorlevel%

if %result% neq 0 (
  echo ❌ Erros encontrados pelo lint-staged. Commit cancelado.
  exit /b %result%
)

echo ✅ Lint-staged finalizado com sucesso!
exit /b 0
