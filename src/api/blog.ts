import { type Error, request } from './request.ts'
import { useAPIStore } from '@/stores/api'

const store = useAPIStore()

const BASE_URL = 'https://dev.to/api/articles'

export interface ArticleSummary {
  id: number,
  created_at: string,
  description: string,
  social_image: string,
  slug: string, 
  tag_list: string[],
  title: string,
  url: string
}

export interface Article {
  body_html: string,
  cover_image: string,
  description: string,
  title: string,
  url: string
}

export const getArticles = async (): Promise<ArticleSummary[] | Error> => {
  if ('blogPosts' in store.apiData) {
    return Promise.resolve(store.apiData.blogPosts as ArticleSummary[])
  }
  return request(`${BASE_URL}?username=seantansey`)
    .then(data => {
      store.storeAPIData('blogPosts', data)
      return data as ArticleSummary[]
    })
    .catch(error => {
      return { error } as Error
    })
}

export const getArticle = async (slug: string): Promise<Article | Error> => {
  if (slug in store.apiData) {
    const result = store.apiData[slug as keyof Object] as Article
    return Promise.resolve(result as Article)
  }
  return request(`${BASE_URL}/seantansey/${slug}`)
    .then(data => {
      store.storeAPIData(slug, data)
      return data as Article
    })
    .catch(error => {
      return { error }
    })
}
