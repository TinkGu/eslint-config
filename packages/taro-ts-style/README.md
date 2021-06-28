# eslint-config-taro-ts-style

> eslint config with taro, typescript and no-inline-styles

# Install

```bash
npm i eslint-config-taro-ts-style -D
```

peer install, you can copy this on your `package.json`

```json
    "@typescript-eslint/eslint-plugin": "^4.4.1",
    "@typescript-eslint/parser": "^4.4.1",
    "eslint": "^7.13.0",
    "eslint-config-taro": "3.2.12",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-no-inline-styles": "^1.0.5",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "typescript": "^3.8.3"
```

# Eslintrc

edit `.eslintrc.js`

```javascript
extends: ['taro-ts-style'],
```
