class GithubInstallationRequest {
    code;
    installationId;
    setupAction;
    userId;

    constructor(githubInstallation) {
        this.code = githubInstallation.code;
        this.installationId = githubInstallation.installation_id;
        this.setupAction = githubInstallation.setup_action;
        this.userId = githubInstallation.state;
    }
}
