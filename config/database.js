if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://MichaelBrandon:<Iamblue1>@cluster0-ksack.mongodb.net/test?retryWrites=true'}
}
else{
    module.exports = {mongoURI: 'mongodb://localhost:27017/charles'}
}