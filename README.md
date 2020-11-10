#Jenkins auto distributon example

## stack
|| Front | Back |
| ------ | ------ | ------ |
| Package manager | yarn | npm |
| Library | react | express |

## shell script
```sh
echo '**********Github Hook Triggered**********'

export BUILD_ID=dontKillMe

npm --version

cd /var/lib/jenkins/workspace/test/client

yarn install

yarn build

sudo rm -rf   /usr/share/nginx/html

sudo mv build html

sudo mv html /usr/share/nginx/

sudo service nginx restart

cd ..

cd server

npm install

pm2 --version

pm2 status

pm2 kill

pm2 start app.js

echo '**********Done**********'
```

## Look document here
- https://tonyw.tistory.com/192