/** @format */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Typescript转换成estree兼容形式，解析器
    env: {
        node: true,
        browser: true,
    },
    plugins: ['@typescript-eslint'],
    extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    rules: {},
}
