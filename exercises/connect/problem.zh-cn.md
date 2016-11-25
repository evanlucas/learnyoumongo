启动mongod于端口`27017`，dbpath 为 `data`。

-----------------------------------------------------------
## 提示

您可以通过以下指令创建`data`文件夹。

```bash
mkdir data
```

端口27017上启动名哦，可以使用 `mongod --port 27017 --dbpath=./data` 指令。

然后，在另一个终端，运行 `npm install mongodb` 指令。

接下来，运行 `learnyoumongo verify` 指令，标记已完成以上练习。

通过了本堂课练习，请勿终结 `mongod`，因为接下来的课程都需要连接数据库。