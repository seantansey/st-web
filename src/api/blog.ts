import { request } from './request.ts'
import { useAPIStore } from '@/stores/api'

const store = useAPIStore()

const BASE_URL = 'https://dev.to/api/articles'

export interface Articles {
  id: number
  created_at: string
  description: string
  social_image: string
  slug: string
  tag_list: string[]
  title: string
  url: string
}

interface ArticlesResponse {
  data: Articles[] | null
  error: string
}

export interface Article {
  body_html: string
  cover_image: string
  description: string
  title: string
  url: string
}

interface ArticleResponse {
  data: Article | null
  error: string
}


export const getArticles = async (): Promise<ArticlesResponse> => {
  if ('blogPosts' in store.apiData) {
    return Promise.resolve({ data: store.apiData.blogPosts, error: "" })
  }
  return request(`${BASE_URL}?username=seantansey`)
    .then(data => {
      store.storeAPIData('blogPosts', data)
      return { data: data as Articles[], error: "" }
    })
    .catch(error => {
      return { data: null, error: error.message }
    })
}

export const getArticle = async (slug: string): Promise<ArticleResponse> => {
  if (slug in store.apiData) {
    return Promise.resolve({ data: store.apiData[slug as keyof object], error: "" })
  }
  return request(`${BASE_URL}/seantansey/${slug}`)
    .then(data => {
      store.storeAPIData(slug, data)
      return { data: data as Article, error: "" }
    })
    .catch(error => {
      return { data: null, error: error.message }
    })
}
