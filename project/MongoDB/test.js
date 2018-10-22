/**
 * 使用 createCollection() 方法来创建集合；
 * 插入一条数据，使用： insertOne();
 * 插入多条数据，使用： insertMany();
 * 查询数据，使用 find();
 * 更新一条数据，使用： updateOne();
 * 更新多条数据，使用： updateMany();
 * 删除一条数据，使用： deleteOne();
 * 删除多条数据，使用： deleteMany();
 * 使用 $lookup 来实现左链接；
 * 使用 drop() 方法来删除集合；
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db('runoob');
	var myobj = { name: '菜鸟教程', url: 'www.runoob'};
	dbo.collection('site').insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log('文档插入成功！');
		db.close();
	});
});
