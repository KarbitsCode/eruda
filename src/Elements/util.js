import each from 'licia/each'
import isStr from 'licia/isStr'
import { classPrefix as c } from '../lib/util'

export function formatNodeName(node, { noAttr = false } = {}) {
  if (node.nodeType === Node.TEXT_NODE) {
    return `<span class="${c('tag-name-color')}">(text)</span>`
  } else if (node.nodeType === Node.COMMENT_NODE) {
    return `<span class="${c('tag-name-color')}"><!--></span>`
  } else if (isShadowRoot(node)) {
    return `<span class="${c('tag-name-color')}">#shadow-root</span>`
  }

  const { id, className, attributes } = node

  let ret = `<span class="eruda-tag-name-color">${node.tagName.toLowerCase()}</span>`

  if (id !== '') ret += `<span class="eruda-function-color">#${id}</span>`

  if (isStr(className)) {
    let classes = ''
    each(className.split(/\s+/g), (val) => {
      if (val.trim() === '') return
      classes += `.${val}`
    })
    ret += `<span class="eruda-attribute-name-color">${classes}</span>`
  }

  if (!noAttr) {
    each(attributes, (attr) => {
      const name = attr.name
      if (name === 'id' || name === 'class' || name === 'style') return
      ret += ` <span class="eruda-attribute-name-color">${name}</span><span class="eruda-operator-color">="</span><span class="eruda-string-color">${attr.value}</span><span class="eruda-operator-color">"</span>`
    })
  }

  return ret
}

export function isShadowRoot(node) {
  if (window.ShadowRoot) {
    return node instanceof ShadowRoot
  }

  return false
}
