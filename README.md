# OpenAI_cover_letter
Input the job description into textarea and press Generate. <br>
Backend combines the prompt, sends to OpenAI API and prints the output below. <br>
Inspired by Buildspace's project on providing UI to generate task specific requests to GPT3

# Installation
- Installing pre-requisuites on Ubuntu 20
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update

# To install with Node.js
sudo apt install yarn

# To install without Node.js
sudo apt install --no-install-recommends yarn

yarn add next react react-dom

npm install openai
```

Starting dev environment:
```
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
```

Adding OpenAI API key in root directory
```
echo "OPENAI_API_KEY=$MY_GENERATED_API_KEY" > .env
```
