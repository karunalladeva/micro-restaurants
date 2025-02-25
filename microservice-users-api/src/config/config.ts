export const config = {
    "dev": {
      "username": process.env.LOCAL_MYSQL_USERNAME,
      "password": process.env.LOCAL_MYSQL_PASSWORD,
      "database": process.env.LOCAL_MYSQL_DATABASE,
      "host": process.env.LOCAL_MYSQL_HOST,
      "dialect": "mysql", // cant pass this dialect in sequelize file, I dont know why
      "aws_reigion": process.env.AWS_REGION,
      "aws_profile": process.env.AWS_PROFILE,
      "aws_media_bucket": process.env.AWS_BUCKET,
      "url": process.env.URL
    },
    "prod": {
      "username": 'admin',
      "password": 'admin',
      "database": 'resi',
      "host": 'localhost',
      "dialect": "postgres",
      "aws_reigion": '',
      "aws_profile": '',
      "aws_media_bucket": '',
      "url": 'http://localhost:8088'
    },
    "jwt": {
      "secret": 'H879JHJJ7687UTYbhgasjdOOO909000jhdsgj'
    },
    "application":{
        "version" : "0.0.1",
        "api_version": "v0",
        "name": "microservice.main",
        "communication_secret":"1232kj1b23i12b312jb31i2312kj3b12i3b12k3j12i3b12i31b23i1b"
    }
}
