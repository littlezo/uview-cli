module.exports = {
    root: true,
    env: {
        node: true,
    },
    // tabWidth: 4,
    plugins: ['prettier'],
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    globals: {
        vm: false,
        uni: true,
        plus: false,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 行末尾分号
        semi: [0],
    },
};
