// import { Error400, Error404 } from '../../../utilities/http-util';
// import { GithubRepo } from '../../../database/models/github-repo';
// import { GithubInstallation } from '../../../database/models/github-installation';
//
// import { GithubInstallationRequest } from '../dto/github-installation-request';

// import { Services } from '../../../services/services';
// import { GithubRepoService } from '../../../services/github-repo-service';
// import { GithubInstallationService } from '../../../services/github-installation-service';
// import { GithubTeamRepoService } from '../../../services/github-team-repo-service';

// const githubInstallationService: GithubInstallationService = Services.instance().githubInstallationService;
// const githubRepoService: GithubRepoService = Services.instance().githubRepoService;
// const githubTeamRepoService: GithubTeamRepoService = Services.instance().githubTeamRepoService;

// class GithubUtil {
//
//     public async authenticateApplication(
//         installation: GithubInstallationRequest
//     ) {
//         const githubInstallation = await githubInstallationService.create(
//             installation
//         );
//         return;
//     }
//
//     public async getGithubInstallation(githubInstallationId: string) {
//         const githubInstallation = await githubInstallationService.getInstallation(
//             githubInstallationId
//         );
//         if (!githubInstallation) {
//             throw new Error404(`Installation ${githubInstallationId} not found`);
//         }
//
//         return githubInstallation;
//     }
//
//     public async createGithubInstallation(
//         githubInstallationId: string,
//         gitUserId: string,
//         gitAccessTokenUrl: string
//     ) {
//         const githubInstallation = await githubInstallationService.getInstallation(
//             githubInstallationId
//         );
//         if (githubInstallation) {
//             githubInstallation.gitUserId = gitUserId;
//             githubInstallation.gitAccessTokenUrl = gitAccessTokenUrl;
//             await githubInstallation.save();
//             return githubInstallation;
//         }
//
//         return githubInstallationService.createFromWebhook(
//             githubInstallationId,
//             gitUserId,
//             gitAccessTokenUrl
//         );
//     }
//
//     public async createGithubRepos(
//         githubInstallation: GithubInstallation,
//         installationEvent: any
//     ) {
//         await installationEvent.repositories.forEach(async (repo) => {
//             const repoExists = await GithubRepo.findOne({
//                 where: {
//                     githubInstallationId: githubInstallation.id,
//                     gitInstallationId: installationEvent.installation.id,
//                     gitRepoId: repo.id,
//                     gitUserId: installationEvent.installation.account.id,
//                 },
//             });
//
//             if (!repoExists) {
//                 await GithubRepo.create({
//                     githubInstallationId: githubInstallation.id,
//                     gitInstallationId: installationEvent.installation.id,
//                     gitRepoId: repo.id,
//                     gitName: repo.name,
//                     gitFullName: repo.full_name,
//                     gitUrl: `${installationEvent.installation.account.html_url}/${repo.name}`,
//                     gitUserId: installationEvent.installation.account.id,
//                     gitIsPrivateRepo: repo.private,
//                 });
//             }
//             return;
//         });
//     }
//
//     public async addGithubRepos(
//         githubInstallation: GithubInstallation,
//         repositories: any[],
//         gitUrl: string
//     ) {
//         await repositories.forEach(async (repo) => {
//             const repoExists = await GithubRepo.findOne({
//                 where: {
//                     githubInstallationId: githubInstallation.id,
//                     gitInstallationId: githubInstallation.gitInstallationId,
//                     gitRepoId: repo.id,
//                     gitUserId: githubInstallation.gitUserId,
//                 },
//             });
//
//             if (!repoExists) {
//                 await GithubRepo.create({
//                     githubInstallationId: githubInstallation.id,
//                     gitInstallationId: githubInstallation.gitInstallationId,
//                     gitRepoId: repo.id,
//                     gitName: repo.name,
//                     gitFullName: repo.full_name,
//                     gitUrl: `${gitUrl}/${repo.name}`,
//                     gitUserId: githubInstallation.gitUserId,
//                     gitIsPrivateRepo: repo.private,
//                 });
//             }
//             return;
//         });
//     }
//
//     public async removeRepos(gitInstallationId: string, repositories: any[]) {
//         repositories.forEach(async (repo) => {
//             await githubTeamRepoService.deleteFromRepoId(repo.id);
//             await githubRepoService.deleteRepo(gitInstallationId, repo);
//         });
//         return;
//     }
//
//     public async deleteApplication(installationEvent: any) {
//         await githubTeamRepoService.deleteFromInstallationId(installationEvent.installation.id);
//         await githubRepoService.deleteApplicationRepos(
//             installationEvent.installation.id
//         );
//         await githubInstallationService.delete(installationEvent.installation.id);
//     }
// }
