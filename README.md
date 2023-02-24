# OpenAI_cover_letter
Inspired by Buildspace's idea on providing UI to generate task specific request to OpenAI API

Pre-requesites:
# Installing yarn and react on Ubuntu 20
`
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update

# To install with Node.js
sudo apt install yarn

# To install without Node.js
sudo apt install --no-install-recommends yarn

yarn add next react react-dom

npm install openai
`

Starting dev environment:
`
$ yarn dev

$ curl -I http://localhost:3000
HTTP/1.1 200 OK
Cache-Control: no-store, must-revalidate
X-Powered-By: Next.js
Content-Type: text/html; charset=utf-8
Vary: Accept-Encoding
Date: Fri, 24 Feb 2023 03:41:04 GMT
Connection: keep-alive
Keep-Alive: timeout=5
`
