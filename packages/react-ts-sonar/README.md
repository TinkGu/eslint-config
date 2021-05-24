# eslint-config-react-ts-sonar

> eslint config with react, typescript and sonarjs

# Install

```bash
npm i eslint-config-react-ts-sonar -D
```

peer install, you can copy this on your `package.json`

```json
    "@typescript-eslint/eslint-plugin": "^4.4.1",
    "@typescript-eslint/parser": "^4.4.1",
    "eslint": "^7.13.0",
    "eslint-import-resolver-typescript": "2.0.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-no-inline-styles": "^1.0.5",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-plugin-sonarjs": "^0.6.0",
    "typescript": "^3.8.3"
```

# Eslintrc

edit `.eslintrc.js`

```javascript
extends: ['react-ts-sonar'],
```
