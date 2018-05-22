## Mac / Linux 下 Redis 安装与测试

一、下载
- Mac 打开 https://redis.io/download ，选择 Stable 版
- Linux `wget http://download.redis.io/releases/redis-4.0.9.tar.gz`

二、解压
```bash
$ tar xzf redis-4.0.9.tar.gz
```
三、安装
```bash
$ cd redis-4.0.9
$ make
```
四、运行 Redis
```bash
$ src/redis-server
```

五、使用 Redis
```bash
$ src/redis-cli
redis> set foo bar
OK
redis> get foo
"bar"
```
