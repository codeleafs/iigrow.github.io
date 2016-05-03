#install

    [Install](https://docs.mongodb.org/manual/installation/)
##OS
    brew update
    brew install mongodb

创建数据目录

首次启动mongodb的时候，mongodb需要一个目录去写数据 mongodb默认使用 /data/db

    mongod //使用默认目录
    mongod -dbpath <path to data directory>
    

MongoDB是一个凯源的文档数据库，提供高性能，高可用性，自动扩展。为了使得MongoDB更容易开发应避免使用ORM

MongoDB的记录是一个由键值对数据结构组成的文档

    
    