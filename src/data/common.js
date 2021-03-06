import { getType, each, eachObj, getCtx } from "../common"

export function map(fn) {
  const ctx = getCtx(this)
  const type = getType(ctx)
  if (type === "Array") {
    return ctx.map(fn)
  }
  if (type === "String") {
    return ctx
      .split("")
      .map(fn)
      .join("")
  }
  if (type === 'Object') {
    const ret = {}
    eachObj(ctx, (val, key) => {
      ret[key] = fn(val, key)
    })
    return ret
  }
  return false
}

export function extend(sup) {
  const ctx = getCtx(this)
  const proto = Object.create(sup)
  proto.constructor = ctx
  ctx.prototype = proto
  return ctx
}

export function copy() {
  const ctx = getCtx(this)
  const type = getType(ctx)
  if (type !== 'Object' && type !== 'Array') return ctx
  let ret
  if (type === 'Object') {
    ret = {}
    eachObj(ctx, (val, key) => {
      ret[key] = val
    })
    return ret
  }
  ret = []
  each(ctx, (v, i) => ret[i] = v)
  return ret
}

function deepCopy() {
  const ctx = getCtx(this)
  const type = getType(ctx)
  if (type !== 'Object' && type !== 'Array') return ctx
  let ret 
  if (type === 'Object') {
    ret = {}
  }
}
