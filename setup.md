# Development Environment Set Up

### Requirements (Pre-Installments)
- Node (confirmed: v14.17.3)

### Initializing

1. Clone the repository 
```
git clone https://github.com/GDSCWaseda/gdscwsd.github.io.git
```
2. Package install
```
npm install
```

3. Change Workspace VSCode Settings
   1. Make **.vscode** folder on the root directory
   ```
   mkdir .vscode
   ```
   2. Inside .vscode folder, create **settings.json** with the following contents
   ```
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.formatOnSave": true,
      "[javascript]": {
        "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
      },
      "[json]": {
        "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
      },
      "[typescript]": {
        "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
      }
    }
   ``` 

4. Run on local 
```
npm run start
```

### Making Changes

1. Create branch from **dev**
2. Create Pull Request(PR) on the github specifying the description
3. Check code format and linter (fix error, ignore warning)
```
npm run lint
npm run format
```
4. Push all the changes, and request Review from the responsible member
