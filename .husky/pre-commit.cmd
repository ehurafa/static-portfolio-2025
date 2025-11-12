@echo off
chcp 65001 >nul

echo 🔍 Running lint-staged before commit...

:: Executa lint-staged e captura o código de saída
call npx lint-staged
set result=%errorlevel%

if %result% neq 0 (
  echo ❌ Lint-staged found issues. Commit aborted.
  exit /b %result%
)

echo ✅ Lint-staged passed successfully!
exit /b 0
