import { by, Target }   from '@serenity-js/webdriverio';


export const RegisterForm = {
    signup: () =>
        Target.the('log in to field auth').located(by.xpath('//*[@href="https://stockbit.com/#/register"]')),
    RegisterEmail: () =>
        Target.the('Register via email').located(by.xpath('//*[@class="loginlogin register-email"]')),
    nameField: () =>
        Target.the('username field').located(by.id('input-1')),
    emailRegis: () =>
        Target.the('password field').located(by.id('input-2')),
    usernameRegis: () =>
        Target.the('password field').located(by.id('input-3')),
    passwordRegis: () =>
        Target.the('password field').located(by.id('input-4')),   
    confirmPassword: () =>
        Target.the('confirm password').located(by.id('input-5')), 
    registerAccount: () =>
        Target.the('Register via email').located(by.xpath('//*[@class="loginlogin"]')),
}

