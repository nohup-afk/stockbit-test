import { Task, Duration } from '@serenity-js/core';
import { Click, Enter, Wait, isVisible ,isClickable } from '@serenity-js/webdriverio';
import { Ensure } from '@serenity-js/assertions';
import { LoginForm } from './ui/LoginForm';

export const Authenticate = {
    using: (username: string, password: string) =>
        Task.where(`#actor log in as ${username})`,
            Wait.for(Duration.ofSeconds(5)),
            Ensure.that(LoginForm.login(), isClickable()),
            Click.on(LoginForm.login()),
            Wait.for(Duration.ofSeconds(5)),
            Ensure.that(LoginForm.usernameField(), isVisible()),
            Click.on(LoginForm.usernameField()), 
            Enter.theValue(username).into(LoginForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(LoginForm.loginButton()),           
        )
}