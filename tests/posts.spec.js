// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { GroupPage } from '../pages/GroupPage';

const TEST_EMAIL = 'amity@facebook.com';
const TEST_PASSWORD = 'it_is_secret';
const GROUP_NAME = "#amity_group";


test('Verify page group displays a collection of posts visible', async ({ page }) => {
        //login
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL, TEST_PASSWORD);
        
        //group
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.verifyPostsVisible();
});

test('Verify add a comment is visible', async ({ page }) => {
        //login
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL, TEST_PASSWORD);
        
        //group
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.verifyAddCommentVisible("#random_post");
});

test('Verify users can join the Facebook group and can see the posts', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL, TEST_PASSWORD);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.joinFacebookGroup(); 
});

test('Verify report violations is visible', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL, TEST_PASSWORD);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.verifyReporButtonVisible(); 
});

