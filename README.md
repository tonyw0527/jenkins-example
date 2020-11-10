# Jenkins auto distribution example

- This is a auto distribution example only with jenkins. (no docker)
- Just type 'git push'. then, you can distribute your app automatically.

## Prerequisites
- Make cloud computer instance
- Install nginx & setting proxy_pass about a URI, '/data'
- Install jenkins & add nodejs plugin & setting a project
- Setting webhooks in your github repository.
- Give 'sudo-right' to username, 'jenkins'

## Stack

|| Front | Back |
| ------ | ------ | ------ |
| Package manager | yarn | npm |
| Library | react | express |

## Shell script

```sh
echo '**********Github Hook Triggered**********'

export BUILD_ID=dontKillMe

npm --version

cd /var/lib/jenkins/workspace/[jenkins_preject_name]/client

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

## Look document here in korean

- https://tonyw.tistory.com/192