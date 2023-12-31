interface Skill {
  category: string,
  technologies: [string, string][]
}

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    technologies: [
      ['JavaScript', 'devicon-javascript-plain colored'],
      ['TypeScript', 'devicon-typescript-plain colored'],
      ['Vue', 'devicon-vuejs-plain colored'],
      ['Svelte', 'devicon-svelte-plain colored'],
      ['React', 'devicon-react-original colored'],
      ['HTML', 'devicon-html5-plain colored'],
      ['CSS', 'devicon-css3-plain colored'],
      ['Sass', 'devicon-sass-plain colored'],
      ['Tailwind', 'devicon-tailwindcss-plain colored']
    ]
  },
  {
    category: 'Backend Development',
    technologies: [
      ['Node.js', 'devicon-nodejs-plain colored'],
      ['Express', 'devicon-express-original colored'],
      ['.NET', 'devicon-dot-net-plain colored'],
      ['Laravel', 'devicon-laravel-plain colored'],
      ['Php', 'devicon-php-plain colored'],
      ['Ruby on Rails', 'devicon-rails-plain colored'],
      ['MySQL', 'devicon-mysql-plain colored'],
      ['PostgreSQL', 'devicon-postgresql-plain colored'],
      ['Firebase', 'devicon-firebase-plain colored']
    ]
  },
  {
    category: 'Other',
    technologies: [
      ['Jest', 'devicon-jest-plain colored'],
      ['Git', 'devicon-git-plain colored'],
      ['Google Analytics', 'devicon-google-plain colored'],
      ['Prometheus', 'devicon-prometheus-original colored'],
      ['NGINX', 'devicon-nginx-original colored'],
      ['DigitalOcean', 'devicon-digitalocean-plain colored'],
      ['Github', 'devicon-github-original'],
      ['Gitlab', 'devicon-gitlab-plain colored'],
      ['VS Code', 'devicon-vscode-plain colored']
    ]
  }
]

