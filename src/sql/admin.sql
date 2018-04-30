CREATE TABLE admin
(
    uid int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username varchar(50) DEFAULT '' NOT NULL COMMENT '管理员名称',
    realname varchar(50) COMMENT '真实姓名',
    password varchar(50) DEFAULT '' NOT NULL COMMENT '密码',
    role varchar(100) COMMENT '权限',
    sign_count int(11) NOT NULL COMMENT '登录次数',
    sign_lastdate int(11) NOT NULL COMMENT '最后登录时间',
    isDelete int(1) DEFAULT '0' NOT NULL
) default character set utf8;
INSERT INTO admin (uid, username, realname, password, role, sign_count, sign_lastdate, isDelete) VALUES (1, 'admin', 'Kenny', '670b14728ad9902aecba32e22fa4f6bd', null, 0, 0, 0);
INSERT INTO admin (uid, username, realname, password, role, sign_count, sign_lastdate, isDelete) VALUES (7, '张玲', null, '5775a0305f172894622453beddecc6ec', null, 0, 0, 0);