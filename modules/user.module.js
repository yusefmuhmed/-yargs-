heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]
const deal = require("./deal.module")
class User{
    static add(data){
        const user = {}
        heads.forEach(head => {
            if(head.default!=null) 
                user[head.key]= head.default
            else user[head.key] = data[head.key]
        });
        console.log(user)
        const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }

    static showAll(){
        const all = deal.readFromJson()
        console.log(all);
    }


    


    static showSingle(data){
    const all = deal.readFromJson()
    console.log(all.find(user => user.name === data));
    
    }

    static edit(data,newData){

        const all = deal.readFromJson()
        const result = all.find(user => user.name === data);
        result = newData
        all.push(result);
        console.log(all);

    }
    static del(data){
    const all = deal.readFromJson()
    const result = all.filter(user => user.name !== data);
    // all.splice(result,1)
    // console.log(all)
    all.pop(result);
    console.log(all);
    }
}
module.exports = User