var mongoose = require('mongoose');
 
var Author = require('./models/author');
var Book = require('./models/book');
 
mongoose.connect('mongodb://localhost/prueba_mongoose', function (err) {
    if (err) throw err;
     
    console.log('Successfully connected');
     
    Book.find({
        title: /dynamic/i
    }).sort('-created')
    .limit(5)
    .exec(function(err, books) {
        if (err) throw err;
         
        console.log(books);
    });
     
    Author.findById('5f60ccbf61c3e11770cf515f', function(err, author) {
        if (err) throw err;
         
        author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';
         
        author.save(function(err) {
            if (err) throw err;
             
            console.log('Author updated successfully');
        });
    });
     
    Author.findByIdAndUpdate('5f60ccbf61c3e11770cf515f', { linkedin: 'https://www.linkedin.com/in/jamie-munro-8064ba1a/' }, function(err, author) {
        if (err) throw err;
         
        console.log(author);
    });
});