import md5 from 'js-md5';

var auth = {
    objKeySort: (arys) => {
        var newkey = Object.keys(arys).sort();
        var newObj = {};
        for (var i = 0; i < newkey.length; i++) {
            newObj[newkey[i]] = arys[newkey[i]];
        }
        return newObj;
    },
    authentication: function(params) {
        let timestamp = parseInt(new Date().getTime() / 1000);
        params['requestId'] = timestamp //防止bug
        params = this.objKeySort(params)
        var str = '';
        for (var key in params) {
            var value = params[key]
            if (value !== '' && value !== undefined) {
                str += key + '>' + md5(String(value)) + '/';
            }
        }
        str += "t>" + timestamp;
        var sign = md5(String(str));
        sign = sign.toUpperCase()
        return {
            'fuck': sign,
            'you': timestamp,
            ...params
        };
    }
}

export default auth;