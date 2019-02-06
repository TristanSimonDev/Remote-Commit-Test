@echo off
setlocal enabledelayedexpansion

:loop
    git add .

    for /l %%j in (1,1,666) do (
        git commit --allow-empty --quiet -m "autocommit"
    )

    git push origin main

goto :loop

