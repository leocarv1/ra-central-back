var exec = require('child_process').exec;
exec(' mysqldump -u root -pCentral@97 ra-centralar > dumpfilename.sql');