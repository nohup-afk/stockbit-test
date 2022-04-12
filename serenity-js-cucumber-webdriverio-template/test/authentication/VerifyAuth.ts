import { Task, Duration } from '@serenity-js/core';
import { Click, Enter, Wait, isVisible , Text } from '@serenity-js/webdriverio';
import { Ensure, includes } from '@serenity-js/assertions';
import { NoticeMessage, HomePage } from './ui/FlashMessage';

export class VerifyAuthentification {
    private static hasFlashAlert = () =>
        Task.where(`#actor verifies flash alert is present`,
            Wait.for(Duration.ofSeconds(1)),
            Ensure.that(NoticeMessage.notifAlert(), isVisible()),
        )

    static failed = () =>
        Task.where(`#actor verifies that authentication failed `,
            VerifyAuthentification.hasFlashAlert(),
            Ensure.that(Text.of(NoticeMessage.notifAlert()), includes('Username atau password salah. Mohon coba lagi.')),
        )
    static succeed = () =>
        Task.where(`#actor verifies that authenticate has succeeded`,
            Wait.for(Duration.ofSeconds(5)),
            Ensure.that(HomePage.homePage(), isVisible()),
            Click.on(HomePage.currentUser()),
            Wait.for(Duration.ofSeconds(1)),
            Click.on(HomePage.logOut()),
        )

}