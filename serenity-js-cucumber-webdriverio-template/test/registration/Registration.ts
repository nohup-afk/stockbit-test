import { Task, Duration } from '@serenity-js/core';
import { Click, Enter, Wait, isVisible, isClickable } from '@serenity-js/webdriverio';
import { Ensure } from '@serenity-js/assertions';
import { RegisterForm } from './ui/Register';

export const Registration = {
    using: (yourname: string, username: string, password: string, confirmpassword: string, email: string) =>
        Task.where(`#actor Registration as ${username})`,
            Wait.for(Duration.ofSeconds(5)),
            Ensure.that(RegisterForm.RegisterEmail(), isVisible()),
            Click.on(RegisterForm.RegisterEmail()),
            Ensure.that(RegisterForm.nameField(), isVisible()),
            Enter.theValue(yourname).into(RegisterForm.nameField()),
            Enter.theValue(email).into(RegisterForm.emailRegis()),
            Enter.theValue(username).into(RegisterForm.usernameRegis()),
            Enter.theValue(password).into(RegisterForm.passwordRegis()),
            Enter.theValue(confirmpassword).into(RegisterForm.confirmPassword()),

        )
}

export const SignUp = {
    signUp: () =>
        Task.where(`#actor sign up for registration`,
            Wait.for(Duration.ofSeconds(5)),
            Ensure.that(RegisterForm.signup(), isClickable()),
            Click.on(RegisterForm.signup()),
        )
}

export const ConfirmRegister = {
    using: () =>
        Task.where(`#actor sign up for registration`,
            Click.on(RegisterForm.registerAccount()),
        )

}