import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { GroupPage } from '../pages/GroupPage';

const TEST_EMAIL = 'amity@facebook.com';
const TEST_PASSWORD = 'it_is_secret';
const GROUP_NAME = "#amity_group";

test('Verify Like post button is visible', async ({ page }) => {
        
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL, TEST_PASSWORD);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.verifyReactionVisible("#random_post");
});

test('Verify all users can add reactions (Like, Care, etc, ...)  on the posts', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(TEST_EMAIL, TEST_PASSWORD);
        
        const gropPage = new GroupPage(page);
        await gropPage.navigatesToGroupPage();
        await gropPage.selectGroupByName(GROUP_NAME);
        await gropPage.addReactionToPost("#random_post", "Like"); 
});


test('Verify all users can add reactions (Like, Care, etc, ...)  on the post comments ', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(TEST_EMAIL, TEST_PASSWORD);
    
    const gropPage = new GroupPage(page);
    await gropPage.navigatesToGroupPage();
    await gropPage.selectGroupByName(GROUP_NAME);
    await gropPage.addReactionToComment("#random_post", "#reandom_comment", "Care"); 
});
