import * as Types from './types'
import * as Interfaces from './interfaces'

export const CtnId = ( other:any ):other is Interfaces.CtnId => {
  return (
      'cuid' in other
      &&
      'string' === typeof other.cuid 
    )
}

export const CtnLocale = ( other:any ):other is Interfaces.CtnLocale => {
  return (
      'locale' in other
      &&
      'string' === typeof other.locale
    )
}

export const CtnRevised = ( other:any ):other is Interfaces.CtnRevised => {
  return (
      'Rev' in other
      &&
      'string' === typeof other.Rev
      &&
      'timestamp' in other
      &&
      'number' === typeof other.timestamp
      &&
      CtnId(other)
    )
}

export const CtnNested = ( other:any ):other is Interfaces.CtnNested => {
  return (
      'children' in other
      &&
      Array.isArray(other.children)
      &&
      other.children.every ( CtnId )
    )
}