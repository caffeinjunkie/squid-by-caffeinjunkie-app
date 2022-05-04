import I18n from 'react-native-i18n';

import en from './en-US.json';
import id from './id-ID.json';
import enFormat from './en_format.json';
import idFormat from './id_format.json';

I18n.fallbacks = true;

I18n.translations = {
  en: Object.assign(en, enFormat),
  id: Object.assign(id, idFormat)
};

export default I18n;
