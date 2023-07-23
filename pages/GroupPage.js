exports.GroupPage = class GroupPage {
    constructor(page) {
        this.page = page;
        
        this.groupIcon = "//a[@aria-label='Groups']/span[@class='x1n2onr6']/*[name()='svg']";
        this.joinButton = `button[class='join-group']`;
        
        this.postList = `//div[class='posts-list']`;
        this.postIconOptions = `button[class='post-icon-options']`;

        this.addNewPostBox = `//span[normalize-space()='Write something...']`;
        this.postInputText = `//input[class='post-body']`
        this.sendNewPostButton = `//button[class='send-new-post']`;
        this.deletePostButton = `//button[class='delete-post-button']`;
        this.confirmDeletePostButton = `//button[class='confirm-delete-post']`;
        this.editPostButton = `//button[class='edit-post-button']`;


        this.commentList = `//div[class='comment-list']`;
        this.commentIconOptions = `button[class='comment-icon-options']`;
        this.addNewCommentBox = `//span[normalize-space()='Write a public comment...']`;
        this.commentInputText = `//input[class='comment-body']`
        this.sendNewCommentButton = `//button[class='send-new-comment']`;
        this.deleteCommentButton = `//button[class='delete-comment-button']`;
        this.editCommentButton = `//button[class='edit-comment-button']`;
        this.confirmDeleteCommentButton = `//button[class='confirm-delete-comment']`;

        this.reactionButton = `//button[class='raction-button']`;
        this.reactionActiveButton = `//button[class='raction-active-button']`;
        
        this.reportPost = `//button[class='report-post-button']`;

        this.adminPendingPostsList = `//div[class='admin-pending-posts-list']`;
        this.confirmPublishPostButton = `//button[class='confirm-publish-post-button']`;
        this.declinePublishPostButton = `//button[class='decline-publich-post-button']`;
        this.confirmPublishPostButton = `//button[class='confirm-publish-post-button']`;

        this.adminUsersList = `//div[class='admin-pending-users-list']`;
        this.adminBanUserButton = `//button[class='admin-ban-user-button']`;
        this.adminBanUserConfirmButton = `//button[class='admin-ban-user-confirm-button']`;
        
        

    }


    async adminBanUser(userId) {
        await this.page.locator(this.adminUsersList + userId).click();
        await this.page.locator(this.adminBanUserButton).click();
        await this.page.locator(this.adminBanUserConfirmButton).click();
    }

    async navigatesToGroupPage() {
        await this.page.locator(this.groupIcon).click();
    }

    async joinFacebookGroup() {
        await this.page.locator(this.joinButton).click();
    }

    async verifyPostsVisible() {
        await this.page.locator(this.postList).toBeVisible();
    }

    async verifyAddCommentVisible(postId) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.commentInputText).toBeVisible();
    }

    async verifyReporButtonVisible(postId) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.postIconOptions).click();
        await this.page.locator(this.reportPost).toBeVisibl();
    }


    async verifyPendingPostsVisible() {
        await expect(this.adminPendingPostsList).toBeVisible();
    }

    async verifyCommentsVisible(postId) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.commentList).toBeVisible();
    }

    async verifyReactionVisible(postId) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.reactionButton).toBeVisible();
    }

    async selectGroupByName(name) {
        await this.page.locator(`//span/a[@role='link'][contains(text(),${name})]`).click();
    }

    async addNewPost(body) {
        await this.page.locator(this.addNewPostBox).click();
        await this.page.locator(this.postInputText).fill(body);
        await this.page.locator(this.sendNewPostButton).click();
    }

    async editPost(postId, body) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.postIconOptions).click();
        await this.page.locator(this.editPostButton).click();
        await this.page.locator(this.postInputText).fill(body);
        await this.page.locator(this.sendNewPostButton).click();
    }

    async deletePost(postId) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.postIconOptions).click();
        await this.page.locator(this.deleteCommentButton).click();
        await this.page.locator(this.confirmDeletePostButton).click();
    }
    
    async addNewComment(postId, body) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.addNewCommentBox).click();
        await this.page.locator(this.commentInputText).fill(body);
        await this.page.locator(this.sendNewCommentButton).click();
    }

    async editComment(postId, commentId, body) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.commentList + commentId).click();
        await this.page.locator(this.commentIconOptions).click();
        await this.page.locator(this.editCommentButton).click();
        await this.page.locator(this.commentInputText).fill(body);
        await this.page.locator(this.sendNewCommentButton).click();
    }

    async deleteComment(postId, commentId) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.commentList + commentId).click();
        await this.page.locator(this.commentIconOptions).click();
        await this.page.locator(this.deleteCommentButton).click();
        await this.page.locator(this.confirmDeleteCommentButton).click();
    }

    async addReactionToPost(postId, reactionType) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.reactionButton + reactionType).click();
        await this.page.locator(this.reactionActiveButton).toBeVisible();
    }

    async addReactionToComment(postId, commentId, reactionType) {
        await this.page.locator(this.postList + postId).click();
        await this.page.locator(this.commentList + commentId).click();
        await this.page.locator(this.reactionButton + reactionType).click();
        await this.page.locator(this.reactionActiveButton).toBeVisible();
    }

    async approvePublishPost(postId) {
        await this.page.locator(this.adminPendingPostsList + postId).click();
        await this.page.locator(this.confirmPublishPostButton).click();
    }

    async declinePublishPost(postId) {
        await this.page.locator(this.adminPendingPostsList + postId).click();
        await this.page.locator(this.declinePublishPostButton).click();
    }
}