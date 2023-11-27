@echo off
cd /d "%~dp0"
set caminho_do_node="C:\Program Files\nodejs\node.exe"
set caminho_do_script="C:\Users\leonardo.souza\Desktop\VS\dev-centralar\Reclame_aqui\backend\src\db\backup\backup.js"

%caminho_do_node% %caminho_do_script%
exit
