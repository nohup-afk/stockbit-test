import { by, Target }   from '@serenity-js/webdriverio';


export const NoticeMessage = {
    notifAlert: () =>
        Target.the('notice message').located(by.xpath('//*[@class="sysmsg-content"]')),  
}

export const HomePage = {
    homePage: () =>
        Target.the('Dashboard').located(by.id('header-logo')),
    currentUser: () =>
        Target.the('Current User').located(by.xpath('//span[@class="headermenu user"]')),
    logOut: () =>
        Target.the('logout user').located(by.xpath('//*[@href="#/logout"]')),
}
