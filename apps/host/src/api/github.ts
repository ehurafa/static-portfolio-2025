// GitHub API service
const GITHUB_USERNAME = 'ehurafa'

interface GithubLanguage {
  name: string
  percentage: number
  color: string
}

// Cores oficiais das linguagens (GitHub)
const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Vue: '#41b883',
  SCSS: '#c6538c',
  PHP: '#4F5D95',
  Python: '#3572A5',
  Java: '#b07219',
  React: '#61dafb'
}

export async function fetchGithubLanguages(): Promise<GithubLanguage[]> {
  try {
    // Buscar todos os repos do usuário
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
    )

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repos')
    }

    const repos = await reposResponse.json()

    // Agregar linguagens de todos os repos
    const languageTotals: Record<string, number> = {}
    let totalBytes = 0

    // Buscar linguagens de cada repo
    for (const repo of repos) {
      if (!repo.fork) {
        // Ignorar forks
        const langResponse = await fetch(repo.languages_url)
        if (langResponse.ok) {
          const languages = await langResponse.json()

          for (const [lang, bytes] of Object.entries(languages)) {
            languageTotals[lang] = (languageTotals[lang] || 0) + (bytes as number)
            totalBytes += bytes as number
          }
        }
      }
    }

    // Calcular percentuais e ordenar
    const languagesArray: GithubLanguage[] = Object.entries(languageTotals)
      .map(([name, bytes]) => ({
        name,
        percentage: (bytes / totalBytes) * 100,
        color: languageColors[name] || '#858585'
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 6) // Top 6 linguagens

    return languagesArray
  } catch (error) {
    console.error('Error fetching GitHub languages:', error)
    // Fallback com dados estáticos baseados na imagem
    return [
      { name: 'JavaScript', percentage: 31.06, color: '#f1e05a' },
      { name: 'CSS', percentage: 26.78, color: '#563d7c' },
      { name: 'HTML', percentage: 16.25, color: '#e34c26' },
      { name: 'PHP', percentage: 11.8, color: '#4F5D95' },
      { name: 'TypeScript', percentage: 8.45, color: '#3178c6' },
      { name: 'Vue', percentage: 2.31, color: '#41b883' }
    ]
  }
}
