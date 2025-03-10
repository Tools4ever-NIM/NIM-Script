import axios, { type Axios, type AxiosProxyConfig } from 'axios'
import { wrapper } from 'axios-cookiejar-support'
import { CookieJar } from 'tough-cookie'
import nimSettings from '../config.json'

interface NimConnectionOptions {
  serviceHost: string,
  serviceUser: string,
  servicePassword: string,
  baseUrl: string,
  proxy?: AxiosProxyConfig
}

export class NimHost {
  #session?: Axios
  readonly #jar = new CookieJar()
  readonly #hostPort: string
  readonly #baseUrl: string
  readonly #userName: string
  readonly #passWord: string
  readonly #proxy?: AxiosProxyConfig

  constructor ({ serviceHost, baseUrl, serviceUser, servicePassword, proxy }: NimConnectionOptions) { 
    this.#hostPort = serviceHost
    this.#baseUrl = baseUrl
    this.#userName = serviceUser
    this.#passWord = servicePassword
    this.#proxy = proxy
  }

  public async post<T> (httpRequest: string, body: unknown): Promise<T> {
    const url = new URL(this.#baseUrl + httpRequest, this.#hostPort)
    const urlString = url.toString()

    if (this.#session === undefined) {
      const proxy = this.#proxy
      this.#session = wrapper(axios.create({ auth: { username: this.#userName, password: this.#passWord }, proxy, jar: this.#jar }))
    }
    const data = await this.#session.post<T>(urlString, body)
    return data.data
  }
}

export const nimHost: NimHost = new NimHost({ ...nimSettings, baseUrl: '/api/v1/script' })
