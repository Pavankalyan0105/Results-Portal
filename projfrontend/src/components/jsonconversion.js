
const Jsonconversion = (csvfile) => {
    var lines = csvfile.split("\n");

    var result = [];

    console.log("Lines length",lines.length);

    var headers = lines[2].split(",");

    for(var i=3;i<lines.length;i++){
        var obj = {};
        var current = lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            if(current[j]===headers[j]){
                continue;
            }

            obj[headers[j]] = current[j];
        }
        if(obj[0] === '') break;
        result.push(obj);
    }

    return JSON.stringify(result);
}

export default Jsonconversion;