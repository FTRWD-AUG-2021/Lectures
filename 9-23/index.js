const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/goodMorningPraveena')
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)



        Dog.create({ name: 'Cool', age: 2, furColor: 'brown' })
            .then(res => console.log(res))
            .catch(err => console.error(err))



    })
    .catch(err => console.error('Error connecting to mongo', err));


//create, insertMany, find, findOne, findOneAndUpdate

const Dog = mongoose.model('Dog',
    {
        name: String,
        age: Number,
        furColor: { type: 'String', default: 'white', enum: ['white', 'brown', 'aqua', 'blonde'] },
        toys: Array
    });



// mongoose.disconnect()


// let thePound = [
//     { name: 'Bobby', age: 4, furColor: 'brown' },
//     { name: 'Sandy', age: 14, furColor: 'white' },
//     { name: 'Beethoven', age: 3, furColor: 'brown' },
//     { name: 'Milo', age: 3, furColor: 'aqua' },
//     { name: 'Marly', age: 44, furColor: 'blonde' },
// ]



// Dog.insertMany(thePound).then(console.log)



// const puppy = new Dog({ name: 'Raju' })

// puppy.save()

// Dog.create({ name: 'Bruno', age: 2, furColor: 'brown' })
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

//Dog.findOneAndUpdate({ name: 'Bruno', furColor: 'aqua' }, { age: 4 }, { new: true }).then(res => console.log(res))

// Dog.updateMany({}, { $push: { toys: 'squeaky duck' } }).then(res => console.log(res))

// Dog.deleteMany({ name: "Bruno", furColor: { $ne: 'aqua' } }).then(res => console.log(res))