interface Options {
  method?: string,
  headers?: object,
  body?: object
}

export interface Error {
  error: string
}

export const request = async (url: string, options: Options = {}): Promise<any> => {
  const { method = 'GET', headers, body } = options
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
}
