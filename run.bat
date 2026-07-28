@echo off
cd /d "%~dp0"

echo === Installing client ===
cd client
call npm install
cd ..

echo === Installing server ===
cd server
call npm install
cd ..

echo.
echo ========================================
echo Starting servers...
echo ========================================
echo.
start "formbuilder-server" cmd /c "cd /d "%~dp0server" && npm start"
start "formbuilder-client" cmd /c "cd /d "%~dp0client" && npm start"

echo Client: http://localhost:3000
echo Server: http://localhost:2233
echo.
pause
