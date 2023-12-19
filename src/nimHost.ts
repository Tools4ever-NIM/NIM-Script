import axios, { type AxiosProxyConfig } from 'axios'
import nimSettings from '../config.json'

export class NimHost {
  constructor (private readonly _hostPort: string = '', private readonly _baseUrl: string = '', private readonly userName: string, private readonly passWord: string, private readonly proxy?: AxiosProxyConfig) { }
  public async post<T> (httpRequest: string, body: unknown): Promise<T> {
    const url = new URL(this._baseUrl + httpRequest, this._hostPort)
    const urlString = url.toString()

    const proxy = this.proxy
    const data = await axios.post<T>(urlString, body, { auth: { username: this.userName, password: this.passWord }, proxy })
    return data.data
  }
}

export const nimHost: NimHost = new NimHost(nimSettings.serviceHost, '/api/v1/script', nimSettings.serviceUser, nimSettings.servicePassword, nimSettings.proxy ?? undefined)
