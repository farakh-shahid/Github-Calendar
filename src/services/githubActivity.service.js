import { GITHUB_API_ENDPOINT } from '@/utils/apiConfig'

const fetchGitHubData = async () => {
  try {
    const response = await fetch(GITHUB_API_ENDPOINT)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return await response.json()
  } catch (error) {
    throw new Error('Error fetching GitHub data: ' + error.message)
  }
}

export { fetchGitHubData }
