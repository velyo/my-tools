ECHO Git Aliases Setup

REM git status shortcut [usage: git st]
git config --global alias.st status

REM checkout shortcut [usage: git co dev]
git config --global alias.co checkout

REM create branch shortcut [usage: git br BRANCH]
git config --global alias.br branch

REM create a new branch and switch to it [usage: git cb BB-0000]
git config --global alias.cb "checkout -b"

REM add and commit all changes with comment [usage: git ci “BB-0000 issue”]
git config --global alias.ci "!git add -A && git commit -m"

REM add changes to last commit [usage: git append]
git config --global alias.append "!git add -A ; git commit --amend --no-edit -C HEAD"

REM push a new local branch to the upstream [usage: git put BB-0000]
git config --global alias.put "push --set-upstream origin"

REM rollback the last commit [usage: git rollback]
git config --global alias.rollback "reset --soft HEAD~"

REM decorated log [usage: git lga]
git config --global alias.lga "log --graph --oneline --all --decorate"

REM uncommit the last commit [usage: git uncommit]
git config --global alias.uncommit "reset HEAD~"

REM unstage the added changes [usage: git unstage]
git config --global alias.unstage "reset HEAD --"