const feather = require('feather-icons')
import { CopyText } from './utils'

feather.replace()

document.querySelector('#gpgIcon')
  .addEventListener('click', () => CopyText('#gpg'))
