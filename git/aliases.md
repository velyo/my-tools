# Git aliases

### shortcut for checkout
```
git config --global alias.co checkout
usage: git co dev
```

### shortcut for create branch
```
git config --global alias.br branch 
usage: git br BRANCH
```

### shortcut for creating a new branch and switching to it immediately
```
git config --global alias.cb “checkout -b” 
usage: git cb ISSUE-0000
```

### shortcut for adding all modified files with comment
```
git config --global alias.ci “commit -a -m”
usage: git ci “BB-0000 issue”
```

### shortcut for git status output
```
git config --global alias.st status
usage: git st
```

### shortcut to add a forgotten files to last commit
```
git config --global alias.cad "!git add . ; git commit --amend -C HEAD"
usage: git cad
```

### shortcut to push a new local branch to the upstream
```
git config --global alias.put “push --set-upstream origin”
usage: git put BB-0000
```

### shortcut to rollback the last commit
```
git config --global alias.rollback “reset --soft HEAD~”
usage: git rollback
```

### shortcut to unstage added changes
```
git config --global alias.unstage 'reset HEAD --'
usage: git unstage
```

### shortcut for graphical log output
```
git config -- global alias.lga 'log --graph --oneline --all --decorate'
usage: git lga
```

### shortcut for historical log output
```
git config --global alias.hist 'log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short'
usage: git hist
```