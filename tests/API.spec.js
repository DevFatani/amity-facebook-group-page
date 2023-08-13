// @ts-check
import { test, expect } from '@playwright/test';

test("Get Product", async ({request}) => {
    const response = await request.get('products', {
        headers: {
            'CF-Access-Client-Secret': 'ce7364ab08bc17d4c63d48d4dbd524ddbeb37ac38527eb3a96cd779ccfc54192',
            'CF-Access-Client-Id': '9d24f17e73357e8e02941bc13f3e56e0.access'
        }
    });
    console.log(await response.text());
    // expect(response.ok()).toBeTruthy();
})