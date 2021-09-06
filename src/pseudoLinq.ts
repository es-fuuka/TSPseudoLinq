export {};

declare global{
    interface Array<T>{
        // Aggregate(aggregator: (n: any, elem: T) => any): any;
        Aggregate(init: any, aggregator: (n: any, elem: T) => any, resultSelector?: (result: any) => any): any;
        All(predicate: (x: T) => boolean): boolean;
        Any(predicate: (x: T) => boolean): boolean;
        Count(predicate?: (x: T) => boolean): number;
        FirstOrDefault(predicate: (x: T) => boolean): T;
        Select(selector: (x: T) => any): Array<any>;
        Where(predicate: (x: T) => boolean): Array<T>;
    }
}

Object.defineProperties(Array.prototype, {
    // 'Aggregate': {
    //     configurable: false,
    //     enumerable: false,
    //     writable: false,
    //     value: function(this: Array<any>, aggregator: (n: any, elem: any) => any){
    //         let result = '';
    //         for (let item of this){
    //             result = aggregator(result, item);
    //         }
    //         return result;
    //     }
    // },
    'Aggregate': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function(this: Array<any>, init: any, aggregator: (n: any, elem: any) => any, resultSelector?: (result: any) => any){
            let result = init;
            for (let item of this){
                result = aggregator(result, item);
            }
            return resultSelector ? resultSelector(result) : result;
        }
    },
    'All': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function(this: Array<any>, predicate: (x: any) => boolean){
            for (let item of this){
                if (!predicate(item))return false;
            }
            return true;
        }
    },
    'Any': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function(this: Array<any>, predicate: (x: any) => boolean){
            for (let item of this){
                if (predicate(item))return true;
            }
            return false;
        }
    },
    'Count': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function(this: Array<any>, predicate?: (x: any) => boolean){
            if (!predicate) return this.length;
    
            return this.filter(x=>predicate(x)).length;
        }
    },
    'FirstOrDefault': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function(this: Array<any>, predicate: (x: any) => boolean){
            for (let item of this){
                if (predicate(item))return item;
            };

            return undefined;
        }
    },
    'Select': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function(this: Array<any>, selector: (x: any) => any){
            const result: Array<any> = [];
            this.forEach(x=>result.push(selector(x)));
            return result;
        }
    },
    'Where': {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function(this: Array<any>, predicate: (x: any) => boolean){
            return this.filter(x=>predicate(x));
        }
    },
})
