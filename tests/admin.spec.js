// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { GroupPage } from '../pages/GroupPage';

const TEST_EMAIL_ADMIN = 'amity_admin@facebook.com';
const TEST_PASSWORD_ADMIN = 'it_is_secret_admin';
const GROUP_NAME = "#amity_group";

test('Verify admin can view a list of posts in the pending status', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL_ADMIN, TEST_PASSWORD_ADMIN);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.verifyPendingPostsVisible();
});


test('Verify if the admin can moderate inappropriate posts by removing them from the group page', async ({ page }) => {
        //login
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL_ADMIN, TEST_PASSWORD_ADMIN);
        
        //group
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.deletePost("#inappropriate_post")
});

test('Verify if the admin can moderate inappropriate comments by deleting them from a post', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL_ADMIN, TEST_PASSWORD_ADMIN);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.deleteComment("#random_post", "#inappropriate_comment");
});

test('Validate that the admin can ban a user', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL_ADMIN, TEST_PASSWORD_ADMIN);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.adminBanUser("#user_to_be_banned")
});


test('Verify that admin can approve the posts', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL_ADMIN, TEST_PASSWORD_ADMIN);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.approvePublishPost("#approve_post")
});

test('Verify that admin can decline on the posts', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL_ADMIN, TEST_PASSWORD_ADMIN);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.declinePublishPost("#decline_post")
});





