import _ from 'lodash'
import {genObjectId} from './utils'
import {normalizeTab} from './tab'
import {PICKED_LIST_RPOPS} from './constants'

export const createNewTabList = ({tabs, title, time}) => ({
  _id: genObjectId(),
  tabs: Array.isArray(tabs) ? tabs.map(normalizeTab) : [],
  title: title || '',
  time: time || Date.now(),
  titleEditing: false,
  pinned: false,
  expand: true,
  color: '',
})

// Preserving the needed properties before store lists.
export const normalizeList = list => {
  const normalizedList = _.pick(list, PICKED_LIST_RPOPS)
  normalizedList.tabs = normalizedList.tabs.map(normalizeTab)
  return normalizedList
}

export default {createNewTabList, normalizeList}
