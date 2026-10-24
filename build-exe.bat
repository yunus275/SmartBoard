@echo off
title Build Aymen Schoolboard EXE
where node >nul 2>nul || (echo Install Node.js first: https://nodejs.org & pause & exit /b)
call npm install
call npm run dist
echo.
echo Done! Your app: release\Aymen-Schoolboard.exe
pause
