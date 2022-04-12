import { by, Target }   from '@serenity-js/webdriverio';

export const LoginForm = {
    login: () =>
        Target.the('log in to field auth').located(by.xpath('//*[@href="https://stockbit.com/#/login"]')),
    usernameField: () =>
        Target.the('username field').located(by.id('username')),
    passwordField: () =>
        Target.the('password field').located(by.id('password')),
    loginButton: () =>
        Target.the('login button').located(by.id('loginbutton')),   
}