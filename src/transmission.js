import _ from 'lodash'

export function transmissionParse(input) {
    if (!input.includes('::')) {
        return -1
    }
    const [id,rawData]=input.split('::');
    if (rawData){
        if (!_.startsWith(rawData,'<')){
            return -1
        }
        if (!_.endsWith(rawData,'>')){
            return -1
        }
    }
    return {
        id: Number(id),
        rawData: _.trim(rawData, ['<', '>'])
    }
}