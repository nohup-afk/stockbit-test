import 'expect-webdriverio'

import { Given, When, Then } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/webdriverio';
import { Authenticate } from '../../test/authentication/Authenticate';
import { VerifyAuthentification } from '../../test/authentication/VerifyAuth';
import { ConfirmRegister, Registration, SignUp } from '../../test/registration/Registration';


Given('{actor} start with open stockbit', { timeout: 2 * 5000 }, async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('https://stockbit.com/'),
    )
);


Given('{pronoun} sign up for stockbit', { timeout: 2 * 10000 }, async (actor: Actor) =>
    actor.attemptsTo(
        SignUp.signUp(),
    )
);

Given('{pronoun} fill up requirement register account with {string} {string} {string} {string} {string}', { timeout: 2 * 10000 }, async (actor: Actor, name: string, email: string, username: string, password: string, confirmpassword: string) =>
    actor.attemptsTo(
        Registration.using(name, email, username, password, confirmpassword),
    )
);




Then('{pronoun} click register', { timeout: 2 * 10000 }, async (actor: Actor) =>
    actor.attemptsTo(
        ConfirmRegister.using(),
    )
);



When('{pronoun} login using {string} and {string}', { timeout: 2 * 10000 }, async (actor: Actor, username: string, password: string) =>
    actor.attemptsTo(
        Authenticate.using(username, password),
    )
);

Then(/.* should she that authentification has (succeed|failed)/, { timeout: 2 * 5000 }, async (expectedOutcome: string) =>
    actorInTheSpotlight().attemptsTo(
        VerifyAuthentification[expectedOutcome](),
    )
);
