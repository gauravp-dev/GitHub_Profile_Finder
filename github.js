class GitHub {
    constructor() {
        this.client_id = '9699c608bc97c23a31cf';
        this.client_secret = '6c8d572f785606d1569e0d029c95c7eb25622463';
        this.repo_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}
        &client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();
        return {
            profile: profileData,
            repos: reposData
        }
    }
}