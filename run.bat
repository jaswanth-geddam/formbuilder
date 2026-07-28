@echo off
cd /d "%~dp0"

echo === Installing client ===
cd client
call pnpm install
cd ..

echo === Installing server ===
cd server
call pnpm install
cd ..

echo.
echo ========================================
echo Starting servers...
echo ========================================
echo.
start "formbuilder-server" cmd /c "cd /d "%~dp0server" && pnpm start"
start "formbuilder-client" cmd /c "cd /d "%~dp0client" && pnpm start"

echo Client: http://localhost:3000
echo Server: http://localhost:2233
echo.
pause
