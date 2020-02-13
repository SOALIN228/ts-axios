import { AxiosInterface } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInterface {
  const content = new Axios()
  const instance = Axios.prototype.request.bind(content)

  extend(instance, content)

  return instance as AxiosInterface
}

const axios = createInstance()

export default axios
