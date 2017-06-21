import * as _ from 'lodash';

export class CaseFormat {

    /**
     * Convert keys object to snake case
     */
    static convertKeysToSnakeCase(obj: Object): Object {
        let newO, newKey;
        if (obj instanceof Array) {
            newO = [];
            _.forOwn(obj, (value, key) => {
                if (typeof value === 'object') {
                    value = this.convertKeysToSnakeCase(value);
                }
                newO.push(value);
            });
        } else {
            newO = {};
            _.forOwn(obj, (value, key) => {
                newKey = _.snakeCase(key);
                if (value !== null && typeof value === 'object') {
                    value = this.convertKeysToSnakeCase(value);
                }
                newO[newKey] = value;
            });
        }
        return newO;
    }

    /**
     * Convert keys object to camel case
     */
    static convertKeysToCamelCase(obj: Object): Object {
        let newO, newKey;
        if (obj instanceof Array) {
            newO = [];
            _.forOwn(obj, (value, key) => {
                if (typeof value === 'object') {
                    value = this.convertKeysToCamelCase(value);
                }
                newO.push(value);
            });
        } else {
            newO = {};
            _.forOwn(obj, (value, key) => {
                newKey = _.camelCase(key);
                if (value !== null && typeof value === 'object') {
                    value = this.convertKeysToCamelCase(value);
                }
                newO[newKey] = value;
            });
        }
        return newO;
    }
}
