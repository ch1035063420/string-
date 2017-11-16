Array.prototype.add = function(item){
        this.push(item);
    }
    Array.prototype.addRange = function(items){
        var length = items.length;
        if(length!=0){
            for (var index = 0; index < length; index++) {
                this.push(items[index]);
                
            }
        }
    }
    Array.prototype.clear = function(){
        if(this.length>0){
            this.splice(0,this.length);
        }
    }
    Array.prototype.isEmpty = function(){
        if(this.length == 0){
            return true;
        }
        else{
            return false;
        }
    }
    Array.prototype.clone = function(){
        var clonedArray = [];
        var length = this.length;
        for (var index = 0; index < length; index++) {
            clonedArray[index] = this[index];
        }
        return clonedArray;
    }
    Array.prototype.contains = function(item){
        var index = this.indexOf(item);
        return (index>=0);
    }
    Array.prototype.dequeue = function(){
        return this.shift();
    }
    Array.prototype.indexOf = function(item){
        var length = this.length;

        if(length!=0){
            for (var index = 0; index < length; index++) {
                if(this[index] == item){
                    return index;
                }
            }
        }
        return -1;
    }
    Array.prototype.insert = function(index,item){
        this.splice(index,0,item);
    }
    Array.prototype.joinstr = function(str){
        var newStr = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
            newStr[i] = this[i]+str;
        }
        return newStr;
    }
    Array.prototype.queue = function(item){//入队
        this.push(item);
    }
    Array.prototype.remove = function(item){
        var index = this.indexOf(item);
        if(index >= 0){
            this.splice(index,1);
        }
    }
    Array.prototype.removeAt = function(index){
        this.splice(index,1);
    }
    //给js原生Array增加each方法
    Array.prototype.each = function(fn)
    {
        return this.length ? [fn(this.slice(0,1))].concat(this.slice(1).each(fn)) : [];
    };
    
    [1,2,3,4].each(function(x){
        document.write(x + "<br/>");
    });