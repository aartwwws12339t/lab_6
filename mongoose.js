
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin123@cluster0.apisu.mongodb.net/Cluster0?retryWrites=true&w=majority',{
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);
console.log("Connect with db...")
module.exports=mongoose;
