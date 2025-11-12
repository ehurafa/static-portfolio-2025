@echo off
echo 🔍 Running lint-staged before commit...
npx lint-staged

if %errorlevel% neq 0 (
  echo ❌ Lint-staged found issues. Commit aborted.
  exit /b 1
)

echo ✅ Lint-staged passed!
exit /b 0
