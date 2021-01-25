/**
 * en-US: Convert a timestamp to a locale DateTime String
 * pt-BR: Converte um timestamp para uma String DateTime local
 * 
 * @example 
 *   tz_to_locale('2021-01-25'); //  25/01/2021
 *   tz_to_locale('2021-01-25 01:33:54'); // 25/01/2021 01:33:54
 *   tz_to_locale('2021-01-25 01:45:46', 'short'); // 25/01/2021
 *   tz_to_locale('2021-01-25 01:45:46', 'full'); // segunda-feira, 25 de janeiro de 2021
 *   tz_to_locale('2021-01-25 01:45:46', 'long'); // 25 de janeiro de 2021
 *   tz_to_locale('2021-01-25 01:45:46', 'medium'); // 25 de jan. de 2021
 *   tz_to_locale('2021-01-25 01:33:54', 'no-style', 'en-US'); // 1/25/2021, 1:33:54 AM
 * @param   {String} required       Timestamp ISO8601
 * @param   {String} [optional]     Accept only ['no-style', 'short', 'medium', 'full', 'long']
 * @returns {String} [optional]     Accept only JavaScript locales like 'pt-BR, en-US, pt-PT and all others see javascript documentation'
 */
function tz_to_locale(tz, style='', locale='pt-BR'){
    try{
        if(tz.length == 10 && /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/g.test(tz)){
            style = (style == '') ? 'short' : style;
            return (style=='no-style') ? (new Date(tz+'T00:00:00')).toLocaleString(locale) : (new Date(tz+'T00:00:00')).toLocaleString(locale, {'dateStyle': style});
        } else{
            let istz = tz.match(/([0-9]{4}\-[0-9]{2}\-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2})|([0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2})/g);
            if(istz != null){
                style = (style == '') ? 'no-style' : style;
                return (style=='no-style') ? (new Date(istz)).toLocaleString(locale) : (new Date(istz)).toLocaleString(locale, {'dateStyle': style});
            }
        }
    } catch(err){
        console.log(err);
        return tz;
    }
    
    return tz;
}