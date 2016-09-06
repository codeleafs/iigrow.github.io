#install

    [Install](https://docs.mongodb.org/manual/installation/)
##OS
    brew update
    brew install mongodb

创建数据目录

首次启动mongodb的时候，mongodb需要一个目录去写数据 mongodb默认使用 /data/db

    mongod //使用默认目录(/data/db)
    mongod -dbpath <path to data directory>
    

MongoDB是一个开源的文档数据库，提供高性能，高可用性，自动扩展。为了使得MongoDB更容易开发应避免使用ORM

MongoDB的记录是一个由键值对数据结构组成的文档
    
    When starting, mongo checks the user’s HOME directory for a JavaScript file named .mongorc.js. If found, mongo interprets the content of .mongorc.js before displaying the prompt for the first time. If you use the shell to evaluate a JavaScript file or expression, either by using the --eval option on the command line or by specifying a .js file to mongo, mongo will read the .mongorc.js file after the JavaScript has finished processing. You can prevent .mongorc.js from being loaded by using the --norc option.

    // To list the available databases
    show dbs
    // To display the database you are using
    db
    // To switch databases
    use <database>


You can switch to non-existing databases. When you first store data in the database, such as by creating a collection, MongoDB creates the database.

    db.collection.insert()
    db.collection.insertOne()
    db.collection.insertMany() 

    db.collection.find()

    db.collection.update()
    db.collection.updateOne()
    db.collection.updateMany()
    db.collection.replaceOne()

    db.collection.remove()
    db.collection.deleteOne()
    db.collection.deleteMany()


Equality	{<key>:<value>}	db.mycol.find({"by":"tutorials yiibai"}).pretty()	where by = 'tutorials yiibai'
Less Than	{<key>:{$lt:<value>}}	db.mycol.find({"likes":{$lt:50}}).pretty()	where likes < 50
Less Than Equals	{<key>:{$lte:<value>}}	db.mycol.find({"likes":{$lte:50}}).pretty()	where likes <= 50
Greater Than	{<key>:{$gt:<value>}}	db.mycol.find({"likes":{$gt:50}}).pretty()	where likes > 50
Greater Than Equals	{<key>:{$gte:<value>}}	db.mycol.find({"likes":{$gte:50}}).pretty()	where likes >= 50
Not Equals	{<key>:{$ne:<value>}}	db.mycol.find({"likes":{$ne:50}}).pretty()


db.mycol.find("likes": {$gt:10}, $or: [{"by": "yiibai"}, {"title": "MongoDB Overview"}] })

db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})
// MongoDB默认将只更新单一的文件，来更新多个你需要设置参数置'multi' 为true
db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}},{multi:true})

 save() 方法替换现有的文档

 db.COLLECTION_NAME.find().limit(NUMBER)
 除了limit() 方法，还有一个方法skip() 也接受数字类型的参数，并使用跳过的文档数。

 要在 MongoDB 中的文档进行排序，需要使用sort()方法。 sort() 方法接受一个文档，其中包含的字段列表连同他们的排序顺序。要指定排序顺序1和-1。 1用于升序排列，而-1用于降序。

 $sum	总结从集合中的所有文件所定义的值.	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])
$avg	从所有文档集合中所有给定值计算的平均.	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])
$min	获取集合中的所有文件中的相应值最小.	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])
$max	获取集合中的所有文件中的相应值的最大.	db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])
$push	值插入到一个数组生成文档中.	db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])
$addToSet	值插入到一个数组中所得到的文档，但不会创建重复.	db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])
$first	根据分组从源文档中获取的第一个文档。通常情况下，这才有意义，连同以前的一些应用 “$sort”-stage.	db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])
$last	根据分组从源文档中获取最后的文档。通常，这才有意义，连同以前的一些应用 “$sort”-stage.	db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])