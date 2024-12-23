
import github from "../assets/github.png"
import gitlab from "../assets/gitlab.png"
import bitbucket from "../assets/bitbucket.png"
import azure from "../assets/azure.png"
import key from "../assets/key.png"

const OAuthProviders = {
    saas: [
      {
        name: 'Github',
        authUrl: import.meta.env.VITE_GITHUB_AUTH_URL,
        icon:github
      },
      {
        name: 'Bitbucket',
        authUrl: import.meta.env.VITE_BITBUCKET_AUTH_URL,
        icon:bitbucket
      },
      {
        name: 'Azure DevOps',
        authUrl: import.meta.env.VITE_AZURE_DEVOPS_AUTH_URL,
        icon:azure
      },
      {
        name: 'GitLab',
        authUrl: import.meta.env.VITE_GITLAB_AUTH_URL,
        icon:gitlab
      },
    ],
    selfHosted: [
      {
        name: 'Self Hosted GitLab',
        authUrl: import.meta.env.VITE_SELF_HOSTED_GITLAB_AUTH_URL,
        icon:gitlab
      },
      {
        name: 'Sign in with SSO',
        authUrl: '', // for adding custom SSO logic 
        icon:key
      },
    ],
    redirectUri: import.meta.env.VITE_REDIRECT_URI,
  };
  
  export default OAuthProviders;